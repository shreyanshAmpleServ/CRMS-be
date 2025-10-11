import { z } from 'zod';

/////////////////////////////////////////
// CRMS M VENDOR SCHEMA
/////////////////////////////////////////

export const crms_m_vendorSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  is_active: z.string(),
  account_owner: z.number().nullish(),
  website: z.string(),
  glaccount: z.string(),
  category: z.string(),
  email_opt_out: z.string(),
  billing_street: z.string().nullish(),
  billing_city: z.string().nullish(),
  billing_state: z.number().nullish(),
  billing_zipcode: z.string().nullish(),
  billing_country: z.number().nullish(),
  description: z.string().nullish(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  profile_img: z.string().nullish(),
})

export type crms_m_vendor = z.infer<typeof crms_m_vendorSchema>

export default crms_m_vendorSchema;
