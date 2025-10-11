import { z } from 'zod';

/////////////////////////////////////////
// CRMS M PRIORITIES SCHEMA
/////////////////////////////////////////

export const crms_m_prioritiesSchema = z.object({
  id: z.number(),
  plevel: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_priorities = z.infer<typeof crms_m_prioritiesSchema>

export default crms_m_prioritiesSchema;
