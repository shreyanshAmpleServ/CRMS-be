import { z } from 'zod';

/////////////////////////////////////////
// CRMS M USER SCHEMA
/////////////////////////////////////////

export const crms_m_userSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  full_name: z.string().nullish(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  address: z.string().nullish(),
  phone: z.string().nullish(),
  profile_img: z.string().nullish(),
})

export type crms_m_user = z.infer<typeof crms_m_userSchema>

export default crms_m_userSchema;
