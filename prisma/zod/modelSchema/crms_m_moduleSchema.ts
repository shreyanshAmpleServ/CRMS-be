import { z } from 'zod';

/////////////////////////////////////////
// CRMS M MODULE SCHEMA
/////////////////////////////////////////

export const crms_m_moduleSchema = z.object({
  id: z.number(),
  module_name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  module_path: z.string().nullish(),
})

export type crms_m_module = z.infer<typeof crms_m_moduleSchema>

export default crms_m_moduleSchema;
