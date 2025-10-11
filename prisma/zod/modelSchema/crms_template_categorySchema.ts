import { z } from 'zod';

/////////////////////////////////////////
// CRMS TEMPLATE CATEGORY SCHEMA
/////////////////////////////////////////

export const crms_template_categorySchema = z.object({
  id: z.number(),
  template_master_id: z.number().nullish(),
  category_name: z.string().nullish(),
  type: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_template_category = z.infer<typeof crms_template_categorySchema>

export default crms_template_categorySchema;
