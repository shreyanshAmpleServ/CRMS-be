import { z } from 'zod';

/////////////////////////////////////////
// CRMS M PRICEBOOK SCHEMA
/////////////////////////////////////////

export const crms_m_pricebookSchema = z.object({
  id: z.number(),
  name: z.string(),
  model: z.string(),
  is_active: z.string(),
  description: z.string(),
  effectivate_from: z.coerce.date().nullish(),
  effectivate_to: z.coerce.date().nullish(),
  createdate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_pricebook = z.infer<typeof crms_m_pricebookSchema>

export default crms_m_pricebookSchema;
