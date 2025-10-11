import { z } from 'zod';

/////////////////////////////////////////
// CRMS M CONTACTROLES SCHEMA
/////////////////////////////////////////

export const crms_m_contactrolesSchema = z.object({
  id: z.number(),
  rolename: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_contactroles = z.infer<typeof crms_m_contactrolesSchema>

export default crms_m_contactrolesSchema;
