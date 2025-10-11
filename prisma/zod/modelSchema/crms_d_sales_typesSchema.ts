import { z } from 'zod';

/////////////////////////////////////////
// CRMS D SALES TYPES SCHEMA
/////////////////////////////////////////

export const crms_d_sales_typesSchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.string().nullish(),
})

export type crms_d_sales_types = z.infer<typeof crms_d_sales_typesSchema>

export default crms_d_sales_typesSchema;
