import { z } from 'zod';

/////////////////////////////////////////
// CRMS TEMPLATE MASTER SCHEMA
/////////////////////////////////////////

export const crms_template_masterSchema = z.object({
  id: z.number(),
  template_name: z.string().nullish(),
  terms: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_template_master = z.infer<typeof crms_template_masterSchema>

export default crms_template_masterSchema;
