import { z } from 'zod';

/////////////////////////////////////////
// CRMS M MANUFACTURER SCHEMA
/////////////////////////////////////////

export const crms_m_manufacturerSchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_manufacturer = z.infer<typeof crms_m_manufacturerSchema>

export default crms_m_manufacturerSchema;
