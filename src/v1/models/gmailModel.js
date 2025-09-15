const { PrismaClient } = require("@prisma/client");
const CustomError = require("../../utils/CustomError");
const prisma = require("../../utils/prismaClient");
const { generateAuthUrl, getOAuthClient } = require("../../utils/gmailAuth");
const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

async function setValidGmailCredentials(userId) {
  const user = await db.dumy_user.findUnique({ where: { id: userId } });

  if (!user || !user.access_token) {
    return { needsOAuth: true };
  }

  const now = Date.now();
  const isExpired = user.expiry_date && now >= user.expiry_date;

  oAuth2Client.setCredentials({
    access_token: user.access_token,
    refresh_token: user.refresh_token,
  });

  if (isExpired) {
    try {
      const newTokens = await oAuth2Client.refreshAccessToken();
      oAuth2Client.setCredentials(newTokens.credentials);

      await db.dumy_user.update({
        where: { id: userId },
        data: {
          access_token: newTokens.credentials.access_token,
          expiry_date: newTokens.credentials.expiry_date,
        },
      });
    } catch (err) {
      return { needsOAuth: true };
    }
  }

  return { gmail: google.gmail({ version: "v1", auth: oAuth2Client }) };
}

// Create a new case
// const sendGmailModal = async (req, res) => {
//   try {
//     const {
//       to,
//       subject,
//       body,
//       record_id,
//       model,
//     } = req.body;

//     const userId = req.user.id;

//     const user = await prisma.crms_users_email_auth.findFirst({
//       where: { id: parseInt(userId) },
//     });

//     if (!user?.access_token || !user?.refresh_token) {
//       return res.status(401).send("Missing Gmail authentication.");
//     }

//     const oAuth2Client = await getOAuthClient();
//     oAuth2Client.setCredentials({
//       access_token: user.access_token,
//       refresh_token: user.refresh_token,
//     });

//     const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

//     // Check if there's a previous message for the given record
//     const existingMessage = await prisma.crms_mail_message.findFirst({
//       where: {
//         record_id: parseInt(record_id),
//         model,
//       },
//       orderBy: {
//         timestamp: 'desc', // get latest if multiple
//       },
//     });

//     let threadId = null;
//     let inReplyTo = null;

//     if (existingMessage) {
//       threadId = existingMessage.thread_id;
//       inReplyTo = existingMessage.message_id;
//     }

//     // Construct the raw email
//     const messageParts = [
//       `To: ${to}`,
//       `Subject: ${subject}`,
//       "Content-Type: text/html; charset=UTF-8",
//       "MIME-Version: 1.0",
//       threadId ? `In-Reply-To: ${inReplyTo}` : "",
//       "", // separate headers from body
//       body,
//     ];

//     const rawMessage = Buffer.from(messageParts.join("\n"))
//       .toString("base64")
//       .replace(/\+/g, "-")
//       .replace(/\//g, "_")
//       .replace(/=+$/, "");

//     const sendRes = await gmail.users.messages.send({
//       userId: "me",
//       requestBody: {
//         raw: rawMessage,
//         ...(threadId && { threadId }),
//       },
//     });

//     const sentMessage = sendRes.data;

//     // Save sent message to DB
//     await prisma.crms_mail_message.create({
//       data: {
//         message_id: sentMessage.id,
//         thread_id: sentMessage.threadId,
//         model,
//         record_id: parseInt(record_id),
//         subject,
//         body,
//         type: "email",
//         sender_id: userId,
//         recipient: to,
//         is_incoming: false,
//         is_read: true,
//         timestamp: new Date(), // optional if you want it
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Email sent successfully.",
//       thread_id: sentMessage.threadId,
//       message_id: sentMessage.id,
//     });

//   } catch (error) {
//     console.error("Send Gmail Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: `Failed to send mail: ${error.message}`,
//     });
//   }
// };
const sendGmailModal = async (req, res) => {
  try {
    let {
      to,
      subject,
      body,
      record_id,
      model,
      thread_id,
      attachments,
      reply_to_message_id,
    } = req.body; // add thread_id from frontend

    const userId = req.user.id;

    const user = await prisma.crms_users_email_auth.findFirst({
      where: { id: parseInt(userId) },
    });

    if (!user?.access_token || !user?.refresh_token) {
      return res.status(401).send("Missing Gmail authentication.");
    }

    const oAuth2Client = await getOAuthClient();
    oAuth2Client.setCredentials({
      access_token: user.access_token,
      refresh_token: user.refresh_token,
    });

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    let inReplyTo = null;

    if (thread_id) {
      const { data: thread } = await gmail.users.threads.get({
        userId: "me",
        id: thread_id,
      });

      const lastMessage = thread.messages[0];

      const headers = lastMessage.payload.headers;
      const messageIdHeader = headers.find(
        (h) => h.name === "Message-ID"
      )?.value;

      if (messageIdHeader) {
        inReplyTo = messageIdHeader;
      }

      // Subject: Re: original subject
      const subjectHeader = headers.find((h) => h.name === "Subject")?.value;
      if (subjectHeader) {
        !subjectHeader.startsWith("Re:")
          ? (subject = `Re: ${subjectHeader}`)
          : (subject = `${subjectHeader}`);
      }
      // If replying, get latest message in the same thread for "In-Reply-To"
      // const existingMessage = await prisma.crms_mail_message.findFirst({
      //   where: { thread_id },
      //   orderBy: { timestamp: "desc" },
      //   select: { recipient: true },
      // });
      // console.log("Exiisiii : ",existingMessage)
      // if (existingMessage) {
      //   to = existingMessage.recipient || "";
      // }
    }

    const boundary = "mixed-boundary-" + Date.now();
    // Construct the raw email
    const messageParts = [
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "MIME-Version: 1.0",
      `To: ${to}`,
      `Subject: ${subject}`,
      "Content-Type: text/html; charset=UTF-8",
      "MIME-Version: 1.0",
      inReplyTo ? `In-Reply-To: ${inReplyTo}` : "",
      inReplyTo ? `References: <${inReplyTo}>` : "",
      "",
      `--${boundary}`,
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 7bit",
      "",
      body,
      "",
    ];
    // const messageParts = [
    //   `To: ${to}`,
    //   `Subject: ${subject}`,
    //   "Content-Type: text/html; charset=UTF-8",
    //   "MIME-Version: 1.0",
    //    inReplyTo ? `In-Reply-To: ${inReplyTo}` : "",
    //   inReplyTo ? `References: <${inReplyTo}>` : "",
    //   "",
    //   body,
    // ];
    // Attachments
    for (const attachment of attachments) {
      const { filename, mimeType, content } = attachment;
      if (!filename || !mimeType || !content) continue;

      messageParts.push(
        `--${boundary}`,
        `Content-Type: ${mimeType}; name="${filename}"`,
        "Content-Transfer-Encoding: base64",
        `Content-Disposition: attachment; filename="${filename}"`,
        "",
        content,
        ""
      );
    }
    // console.log("meeeeeee :",messageParts)
    const rawMessage = Buffer.from(messageParts.join("\n"))
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const sendRes = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: rawMessage,
        ...(thread_id && { threadId: thread_id }),
      },
    });

    const sentMessage = sendRes.data;
    // Save sent message
    await prisma.crms_mail_message.create({
      data: {
        message_id: sentMessage.id,
        thread_id: sentMessage.threadId,
        model,
        record_id: parseInt(record_id),
        subject,
        body,
        type: "email",
        sender_id: userId,
        recipient: to,
        is_incoming: false,
        is_read: true,
        timestamp: new Date(),
      },
    });

    return {
      success: true,
      message: "Email sent successfully.",
      thread_id: sentMessage.threadId,
      message_id: sentMessage.id,
    };
  } catch (error) {
    console.error("Send Gmail Error:", error);
    return res.status(500).json({
      success: false,
      message: `Failed to send mail: ${error.message}`,
    });
  }
};

const getGmailModal = async (res, datas, req) => {
  // const user = await prisma.crms_users_email_auth.findFirst({
  //   where: { id: parseInt(datas.id) },
  // });
  try {
    const userId = req.user.id;
    const { id: recordId } = req.query;

    const user = await prisma.crms_users_email_auth.findFirst({
      where: { id: parseInt(userId) },
    });
    if (!user?.refresh_token)
      return res.status(401).send("Missing refresh token");

    const oAuth2Client = getOAuthClient();
    oAuth2Client.setCredentials({ refresh_token: user.refresh_token });

    const tokenResponse = await oAuth2Client.getAccessToken();
    if (!tokenResponse?.token)
      return res.status(401).send("Failed to refresh access token");

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    // ✅ Fetch threads from DB
    const messageThreads = await prisma.crms_mail_message.findMany({
      where: { record_id: parseInt(recordId) },
      distinct: ["thread_id"],
      select: { thread_id: true },
    });

    if (!messageThreads.length) return res.json({ threads: [] });

    const threadsData = [];
    // console.log("Threads : ",messageThreads)

    for (const { thread_id } of messageThreads) {
      try {
      const thread = await gmail.users.threads.get({
        userId: "me",
        id: thread_id,
        format: "full",
      });

      const messages = await Promise.all(
        thread.data.messages.map(async (msg) => {
          const headers = msg.payload.headers;

          // ✅ Extract email body (text/html preferred)
          // const getBody = (payload) => {
          //   if (!payload) return "";

          //   if ((payload.mimeType === "text/html" || payload.mimeType === "text/plain") && payload.body?.data) {
          //     return Buffer.from(payload.body.data, "base64").toString("utf-8");
          //   }

          //   if (payload.parts && payload.parts.length > 0) {
          //     return payload.parts.map(getBody).join("\n"); // ✅ Collect all parts instead of stopping at first
          //   }

          //   return "";
          // };
          // const getBody = (payload) => {
          //   const findHtmlPart = (parts) => {
          //     for (const part of parts) {
          //       if (part.mimeType === "text/html" && part.body?.data) {
          //         return Buffer.from(part.body.data, "base64").toString("utf-8");
          //       }
          //       if (part.parts) {
          //         const result = findHtmlPart(part.parts);
          //         if (result) return result;
          //       }
          //     }
          //     return null;
          //   };

          //   if (!payload) return "";

          //   // Direct HTML
          //   if (payload.mimeType === "text/html" && payload.body?.data) {
          //     return Buffer.from(payload.body.data, "base64").toString("utf-8");
          //   }

          //   // Multipart — search parts
          //   if (payload.parts) {
          //     const html = findHtmlPart(payload.parts);
          //     if (html) return html;

          //     const plainPart = payload.parts.find(
          //       (p) => p.mimeType === "text/plain" && p.body?.data
          //     );
          //     if (plainPart) {
          //       return Buffer.from(plainPart.body.data, "base64").toString("utf-8");
          //     }
          //   }

          //   return "";
          // };
          const getBody = (payload) => {
            if (!payload) return "";

            if (payload.mimeType === "text/html" && payload.body?.data) {
              return Buffer.from(payload.body.data, "base64").toString("utf-8");
            }

            // If multipart/alternative, find text/html part
            if (payload.mimeType === "multipart/alternative" && payload.parts) {
              const htmlPart = payload.parts.find(
                (part) => part.mimeType === "text/html"
              );
              if (htmlPart?.body?.data) {
                return Buffer.from(htmlPart.body.data, "base64").toString(
                  "utf-8"
                );
              }
            }

            // Fallback: check sub-parts recursively
            if (payload.parts && payload.parts.length > 0) {
              return payload.parts.map(getBody).join("\n");
            }

            return "";
          };

          const body = getBody(msg.payload) || "";

          // const attachments = [];
          // const extractAttachments = async (parts) => {
          //   for (const part of parts) {
          //     if (part.filename && part.body?.attachmentId) {
          //       const attachment = await gmail.users.messages.attachments.get({
          //         userId: "me",
          //         messageId: msg.id,
          //         id: part.body.attachmentId,
          //       });

          //       attachments.push({
          //         filename: part.filename,
          //         mimeType: part.mimeType,
          //         size: part.body.size,
          //         data: `data:${part.mimeType};base64,${attachment.data.data}`, // ✅ Ready for <img src="">
          //       });
          //     }
          //     if (part.parts) await extractAttachments(part.parts);
          //   }
          // };
          const cidMap = {}; // For mapping cid to base64 image src
          const attachments = [];

          const extractAttachments = async (parts) => {
            for (const part of parts) {
              if (part.filename && part.body?.attachmentId) {
                const attachmentRes =
                  await gmail.users.messages.attachments.get({
                    userId: "me",
                    messageId: msg.id,
                    id: part.body.attachmentId,
                  });

                const base64Data = `data:${part.mimeType};base64,${attachmentRes.data.data}`;

                const contentIdHeader = part.headers?.find(
                  (h) => h.name === "Content-ID"
                );
                if (contentIdHeader) {
                  const cid = contentIdHeader.value.replace(/[<>]/g, "");
                  cidMap[cid] = base64Data; // Used for inline replacements in body
                } else {
                  // Normal file attachment
                  attachments.push({
                    filename: part.filename,
                    mimeType: part.mimeType,
                    size: part.body.size,
                    data: base64Data,
                  });
                }
              }

              // Recursive call for nested parts
              if (part.parts) {
                await extractAttachments(part.parts);
              }
            }
          };

          await extractAttachments(msg.payload.parts || []);

          let finalBody = body;
          for (const cid in cidMap) {
            const regex = new RegExp(`src=["']cid:${cid}["']`, "g");
            finalBody = finalBody.replace(
              regex,
              `src="${cidMap[cid].replace(/-/g, "+").replace(/_/g, "/")}"`
            );
          }
          return {
            id: msg.id,
            threadId: msg.threadId,
            subject: headers.find((h) => h.name === "Subject")?.value || "",
            from: headers.find((h) => h.name === "From")?.value || "",
            to: headers.find((h) => h.name === "To")?.value || "",
            date: headers.find((h) => h.name === "Date")?.value || "",
            cc: headers.find((h) => h.name === "Cc")?.value || "",
            bcc: headers.find((h) => h.name === "Bcc")?.value || "",
            message_id: headers.find((h) => h.name === "Message-ID")?.value,
            inReplyTo:
              headers.find((h) => h.name === "In-Reply-To")?.value || null,
            references:
              headers.find((h) => h.name === "References")?.value || null,
            snippet: msg.snippet,
            body: finalBody,
            attachments,
          };
        })
      );

      // console.log("Message s: ",messages)
      messages.sort((a, b) => new Date(a.date) - new Date(b.date));
      threadsData.push({ threadId: thread_id, messages });
    }
    catch (err) {
      if (err.code === 404) {
        console.warn(`Skipping missing Gmail thread ${thread_id}`);
        continue;
      }
      throw err; // other errors should bubble up
    }
  }

    return threadsData;
  } catch (error) {
    console.log("jjjjj", error);
    throw new CustomError(`Error creating case: ${error.message}`, 500);
  }
};
// const getGmailModal = async (res, datas, req) => {
//   const user = await prisma.crms_users_email_auth.findFirst({
//     where: { id: parseInt(datas.id) },
//   });
//   try {
//     const messageTableData = await prisma.crms_mail_message.findMany({
//       where: { record_id: parseInt(req.query.id) },
//     });
//     console.log("Messsaga TAble : ", req?.params, req?.query, messageTableData);
//     const oAuth2Client = getOAuthClient();
//     if (!user?.refresh_token) {
//       return res.status(401).send("Missing refresh token");
//     }
//     oAuth2Client.setCredentials({
//       // access_token: user.access_token,
//       refresh_token: user.refresh_token,
//     });
//     // Ensure access_token is refreshed
//     const tokenResponse = await oAuth2Client.getAccessToken();
//     if (!tokenResponse || !tokenResponse.token) {
//       return res.status(401).send("Failed to refresh access token");
//     }

//     const threadId = messageTableData?.[0]?.thread_id;
//     const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
//     const thread = await gmail.users.threads.get({
//       userId: "me",
//       // id:threadId,
//       id: "198411751688fab6",
//     });

//     const messages = await Promise.all(
//       thread.data.messages.map(async (msg) => {
//         const headers = msg.payload.headers;

//         // Extract plain text body
//         let body = '';
//         const parts = msg.payload.parts || [];
//         const textPart = parts.find((p) => p.mimeType === 'text/plain');
//         if (textPart?.body?.data) {
//           body = Buffer.from(textPart.body.data, 'base64').toString('utf-8');
//         }

//         // Extract attachments
//         const attachments = [];
//         for (const part of parts) {
//           if (part.filename && part.body?.attachmentId) {
//             const attachment = await gmail.users.messages.attachments.get({
//               userId: "me",
//               messageId: msg.id,
//               id: part.body.attachmentId,
//             });

//             attachments.push({
//               filename: part.filename,
//               mimeType: part.mimeType,
//               size: part.body.size,
//               data: attachment.data.data,
//             });
//           }
//         }

//         return {
//           id: msg.id,
//           threadId: msg.threadId,
//           subject: headers.find((h) => h.name === "Subject")?.value || "",
//           from: headers.find((h) => h.name === "From")?.value || "",
//           to: headers.find((h) => h.name === "To")?.value || "",
//           cc: headers.find((h) => h.name === "Cc")?.value || "",
//           bcc: headers.find((h) => h.name === "Bcc")?.value || "",
//           date: headers.find((h) => h.name === "Date")?.value || "",
//           inReplyTo: headers.find((h) => h.name === "In-Reply-To")?.value || null,
//           references: headers.find((h) => h.name === "References")?.value || null,
//           snippet: msg.snippet,
//           body,
//           attachments,
//         };
//       })
//     );

//     // Optional: sort by date
//     messages.sort((a, b) => new Date(a.date) - new Date(b.date));

//     // const { data } = await gmail.users.messages.list({
//     //   userId: "me",
//     //   maxResults: 25,
//     // });

//     // const messages = await Promise.all(
//     //   (data.messages || []).map(async (msg) => {
//     //     const full = await gmail.users.messages.get({
//     //       userId: "me",
//     //       id: msg.id,
//     //     });
//     //     const headers = full.data.payload.headers;

//     //     // Get plain text body
//     //     let body = "";
//     //     const parts = full.data.payload.parts || [];
//     //     const textPart = parts.find((p) => p.mimeType === "text/plain");
//     //     if (textPart?.body?.data) {
//     //       body = Buffer.from(textPart.body.data, "base64").toString("utf-8");
//     //     }

//     //     // 🔽 Handle attachments
//     //     const attachments = [];
//     //     for (const part of parts) {
//     //       if (part.filename && part.body && part.body.attachmentId) {
//     //         const attachment = await gmail.users.messages.attachments.get({
//     //           userId: "me",
//     //           messageId: msg.id,
//     //           id: part.body.attachmentId,
//     //         });

//     //         attachments.push({
//     //           filename: part.filename,
//     //           mimeType: part.mimeType,
//     //           size: part.body.size,
//     //           data: attachment.data.data, // base64-encoded
//     //         });
//     //       }
//     //     }

//     //     return {
//     //       id: msg.id,
//     //       threadId: full.data.threadId,
//     //       subject: headers.find((h) => h.name === "Subject")?.value || "",
//     //       from: headers.find((h) => h.name === "From")?.value || "",
//     //       to: headers.find((h) => h.name === "To")?.value || "",
//     //       cc: headers.find((h) => h.name === "Cc")?.value || "",
//     //       // date: full.data.internalDate,
//     //       bcc: headers.find((h) => h.name === "Bcc")?.value || "",
//     //       date: headers.find((h) => h.name === "Date")?.value || "",
//     //       inReplyTo:
//     //         headers.find((h) => h.name === "In-Reply-To")?.value || null,
//     //       references:
//     //         headers.find((h) => h.name === "References")?.value || null,
//     //       snippet: full.data.snippet,
//     //       body: body,
//     //       attachments,
//     //     };
//     //   })
//     // );

//     // Group by threadId

//     // const groupedByThread = messages.reduce((acc, msg) => {
//     //   if (!acc[msg.threadId]) {
//     //     acc[msg.threadId] = [];
//     //   }
//     //   acc[msg.threadId].push(msg);
//     //   return acc;
//     // }, {});

//     // Sort each thread's messages by internalDate (timestamp) ASC
//     // for (const threadId in groupedByThread) {
//     //   groupedByThread[threadId].sort((a, b) => {
//     //     return Number(a.date) - Number(b.date);
//     //   });
//     // }

//     // Convert object to array of threads
//     // const threadArray = Object.values(groupedByThread);

//     // return res.json(threadArray);
//     return res.json(messages);
//   } catch (error) {
//     console.log("jjjjj", error);
//     throw new CustomError(`Error creating case: ${error.message}`, 500);
//   }
// };

module.exports = {
  sendGmailModal,
  getGmailModal,
};
