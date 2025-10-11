import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS LEADS SCHEMA
/////////////////////////////////////////

export const crms_leadsSchema = z.object({
  id: z.number(),
  lead_owner: z.number(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
  title: z.string().nullish(),
  email: z.string().nullish(),
  phone: z.string().nullish(),
  fax: z.string().nullish(),
  mobile: z.string().nullish(),
  website: z.string().nullish(),
  lead_source: z.number().nullish(),
  lead_status: z.number().nullish(),
  industry: z.number().nullish(),
  no_of_employees: z.number().nullish(),
  annual_revenue: z.instanceof(Prisma.Decimal, { message: "Field 'annual_revenue' must be a Decimal. Location: ['Models', 'crms_leads']"}).nullish(),
  revenue_currency: z.string().nullish(),
  rating: z.string().nullish(),
  tags: z.string().nullish(),
  email_opt_out: z.string(),
  secondary_email: z.string().nullish(),
  facebook_ac: z.string().nullish(),
  skype_id: z.string().nullish(),
  twitter_ac: z.string().nullish(),
  linked_in_ac: z.string().nullish(),
  whatsapp_ac: z.string().nullish(),
  instagram_ac: z.string().nullish(),
  street: z.string().nullish(),
  city: z.string().nullish(),
  state: z.number().nullish(),
  zipcode: z.string().nullish(),
  country: z.number().nullish(),
  description: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  company_icon: z.string().nullish(),
  company_id: z.number(),
  jobTitle: z.string().nullish(),
})

export type crms_leads = z.infer<typeof crms_leadsSchema>

export default crms_leadsSchema;
