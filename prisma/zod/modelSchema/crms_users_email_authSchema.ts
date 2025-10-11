import { z } from 'zod';

/////////////////////////////////////////
// CRMS USERS EMAIL AUTH SCHEMA
/////////////////////////////////////////

export const crms_users_email_authSchema = z.object({
  id: z.number(),
  user_id: z.number().nullish(),
  email_id: z.string().nullish(),
  access_token: z.string().nullish(),
  refresh_token: z.string().nullish(),
  email_provider: z.string().nullish(),
  expire_datetime: z.coerce.date().nullish(),
  other_info: z.string().nullish(),
})

export type crms_users_email_auth = z.infer<typeof crms_users_email_authSchema>

export default crms_users_email_authSchema;
