import { z } from 'zod';

/////////////////////////////////////////
// CRMS M ROLE SCHEMA
/////////////////////////////////////////

export const crms_m_roleSchema = z.object({
  id: z.number(),
  role_name: z.string(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
})

export type crms_m_role = z.infer<typeof crms_m_roleSchema>

export default crms_m_roleSchema;
