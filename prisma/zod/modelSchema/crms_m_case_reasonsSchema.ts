import { z } from 'zod';

/////////////////////////////////////////
// CRMS M CASE REASONS SCHEMA
/////////////////////////////////////////

export const crms_m_case_reasonsSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  is_active: z.string(),
  description: z.string().nullish(),
  createdate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_case_reasons = z.infer<typeof crms_m_case_reasonsSchema>

export default crms_m_case_reasonsSchema;
