import { z } from 'zod';

/////////////////////////////////////////
// CRMS M TASKPRIORITY SCHEMA
/////////////////////////////////////////

export const crms_m_taskprioritySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_taskpriority = z.infer<typeof crms_m_taskprioritySchema>

export default crms_m_taskprioritySchema;
