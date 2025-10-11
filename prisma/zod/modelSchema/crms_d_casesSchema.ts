import { z } from 'zod';

/////////////////////////////////////////
// CRMS D CASES SCHEMA
/////////////////////////////////////////

export const crms_d_casesSchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.string(),
  case_number: z.string(),
  product_id: z.number().nullish(),
  case_status: z.string(),
  case_type: z.string(),
  case_priority: z.string(),
  case_origin: z.string(),
  case_reason: z.number().nullish(),
  contact_id: z.number().nullish(),
  subject: z.string().nullish(),
  account_id: z.number().nullish(),
  deal_id: z.number().nullish(),
  reported_by: z.string().nullish(),
  email: z.string().nullish(),
  phone: z.string().nullish(),
  description: z.string(),
  createdate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  case_owner_id: z.number().nullish(),
})

export type crms_d_cases = z.infer<typeof crms_d_casesSchema>

export default crms_d_casesSchema;
