import { z } from 'zod';

/////////////////////////////////////////
// CRMS M TASKSTATUSES SCHEMA
/////////////////////////////////////////

export const crms_m_taskstatusesSchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_taskstatuses = z.infer<typeof crms_m_taskstatusesSchema>

export default crms_m_taskstatusesSchema;
