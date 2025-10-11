import { z } from 'zod';

/////////////////////////////////////////
// CRMS M STATES SCHEMA
/////////////////////////////////////////

export const crms_m_statesSchema = z.object({
  country_code: z.number(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  createdby: z.number(),
  log_inst: z.number().nullish(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
  id: z.number(),
  name: z.string(),
})

export type crms_m_states = z.infer<typeof crms_m_statesSchema>

export default crms_m_statesSchema;
