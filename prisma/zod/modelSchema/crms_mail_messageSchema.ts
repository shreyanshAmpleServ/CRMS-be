import { z } from 'zod';

/////////////////////////////////////////
// CRMS MAIL MESSAGE SCHEMA
/////////////////////////////////////////

export const crms_mail_messageSchema = z.object({
  id: z.number(),
  thread_id: z.string().nullish(),
  model: z.string(),
  record_id: z.number(),
  subject: z.string().nullish(),
  body: z.string().nullish(),
  type: z.string(),
  sender_id: z.number().nullish(),
  recipient: z.string().nullish(),
  timestamp: z.coerce.date().nullish(),
  is_incoming: z.boolean().nullish(),
  is_read: z.boolean().nullish(),
  message_id: z.string().nullish(),
  reply_to_id: z.number().nullish(),
})

export type crms_mail_message = z.infer<typeof crms_mail_messageSchema>

export default crms_mail_messageSchema;
