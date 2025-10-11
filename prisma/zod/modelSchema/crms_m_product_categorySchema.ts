import { z } from 'zod';

/////////////////////////////////////////
// CRMS M PRODUCT CATEGORY SCHEMA
/////////////////////////////////////////

export const crms_m_product_categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_product_category = z.infer<typeof crms_m_product_categorySchema>

export default crms_m_product_categorySchema;
