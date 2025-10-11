import { z } from 'zod';

/////////////////////////////////////////
// CRMS M LOCATIONTYPE SCHEMA
/////////////////////////////////////////

export const crms_m_locationtypeSchema = z.object({
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

export type crms_m_locationtype = z.infer<typeof crms_m_locationtypeSchema>

export default crms_m_locationtypeSchema;
