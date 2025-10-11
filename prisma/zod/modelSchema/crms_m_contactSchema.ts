import { z } from 'zod';

/////////////////////////////////////////
// CRMS M CONTACT SCHEMA
/////////////////////////////////////////

export const crms_m_contactSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  jobTitle: z.string().nullish(),
  email: z.string(),
  emailOptOut: z.boolean(),
  phone1: z.string(),
  phone2: z.string().nullish(),
  fax: z.string().nullish(),
  dateOfBirth: z.coerce.date().nullish(),
  reviews: z.number().nullish(),
  owner: z.number().nullish(),
  tags: z.string().nullish(),
  source: z.number().nullish(),
  industry: z.number().nullish(),
  currency: z.string(),
  language: z.string(),
  description: z.string().nullish(),
  streetAddress: z.string().nullish(),
  city: z.string().nullish(),
  state: z.number().nullish(),
  country: z.number().nullish(),
  zipcode: z.string().nullish(),
  socialProfiles: z.string().nullish(),
  visibility: z.string(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  image: z.string().nullish(),
  company_id: z.number().nullish(),
  deal_id: z.number().nullish(),
})

export type crms_m_contact = z.infer<typeof crms_m_contactSchema>

export default crms_m_contactSchema;
