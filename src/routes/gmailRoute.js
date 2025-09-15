const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const { getOAuthClient } = require('../utils/gmailAuth');
const prisma = require("../utils/prismaClient");


// router.get('/callback', async (req, res) => {
//     const { code, state } = req.query;
//     const { userId, action, to, subject, body } = JSON.parse(state);
  
//     const oAuth2Client = getOAuthClient();
//     const { tokens } = await oAuth2Client.getToken(code);
//     oAuth2Client.setCredentials(tokens);
  
//     const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  
//     if (action === 'inbox') {
//       const { data } = await gmail.users.messages.list({
//         userId: 'me',
//         maxResults: 5
//       });
  
//       const messages = await Promise.all(
//         (data.messages || []).map(async (msg) => {
//           const full = await gmail.users.messages.get({ userId: 'me', id: msg.id });
//           const headers = full.data.payload.headers;
//           return {
//             id: msg.id,
//             subject: headers.find(h => h.name === 'Subject')?.value || '',
//             from: headers.find(h => h.name === 'From')?.value || '',
//             snippet: full.data.snippet
//           };
//         })
//       );
  
//       return res.json({ inbox: messages });
//     }
  
//     if (action === 'send') {
//       const emailContent = [
//         `To: ${to}`,
//         `Subject: ${subject}`,
//         ``,
//         body
//       ].join('\r\n');
  
//       const raw = Buffer.from(emailContent)
//         .toString('base64')
//         .replace(/\+/g, '-')
//         .replace(/\//g, '_')
//         .replace(/=+$/, '');
  
//       await gmail.users.messages.send({
//         userId: 'me',
//         requestBody: { raw }
//       });
  
//       return res.send("✅ Email sent successfully.");
//     }
  
//     res.status(400).send("❌ Unknown Gmail action.");
//   });
router.get('/callback', async (req, res) => {
  try {
    const { code, state } = req.query;
    const { userId } = JSON.parse(state || '{}'); // Get userId from state (optional)

    const oAuth2Client = getOAuthClient();
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Check if user already exists in DB
    const user = await prisma.crms_users_email_auth.findFirst({
      where: { id: parseInt(userId) }  
    });

    console.log("User Callback : ",user,tokens)
    if (user) {
      await prisma.crms_users_email_auth.delete({
        where: { id: parseInt(1) },})
      // await prisma.crms_users_email_auth.update({
      //   where: { id: parseInt(userId) },
      //   data: {
      //     access_token: tokens.access_token,
      //     refresh_token: tokens.refresh_token,
      //     expire_datetime: new Date(tokens.expiry_date), // ✅ Convert timestamp to Date
      //   }
      // });
    } else {
      await prisma.crms_users_email_auth.create({
        data: {
          id: parseInt(userId),
          user_id: parseInt(userId),
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          expire_datetime: new Date(tokens.expiry_date), // ✅ Convert timestamp to Date
        }
      });
    }
// console.log
    // ✅ Notify frontend and close popup
    return res.send(`
      <script>
        window.opener.postMessage({ success: true }, "*");
        window.close();
      </script>
    `);
  } catch (err) {
    console.error('OAuth error:', err);
    res.status(500).send('❌ OAuth failed');
  }
});


module.exports = router;
