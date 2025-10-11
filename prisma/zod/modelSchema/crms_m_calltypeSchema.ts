import { z } from 'zod';

/////////////////////////////////////////
// CRMS M CALLTYPE SCHEMA
/////////////////////////////////////////

export const crms_m_calltypeSchema = z.object({
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

export type crms_m_calltype = z.infer<typeof crms_m_calltypeSchema>

export default crms_m_calltypeSchema;
