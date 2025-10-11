import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS M PRODUCTS SCHEMA
/////////////////////////////////////////

export const crms_m_productsSchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  vendor_id: z.number().nullish(),
  manufacturer_id: z.number().nullish(),
  tax_id: z.number().nullish(),
  unit_price: z.instanceof(Prisma.Decimal, { message: "Field 'unit_price' must be a Decimal. Location: ['Models', 'crms_m_products']"}).nullish(),
  currency: z.number().nullish(),
  onhand: z.instanceof(Prisma.Decimal, { message: "Field 'onhand' must be a Decimal. Location: ['Models', 'crms_m_products']"}).nullish(),
  ordered: z.instanceof(Prisma.Decimal, { message: "Field 'ordered' must be a Decimal. Location: ['Models', 'crms_m_products']"}).nullish(),
  commited: z.instanceof(Prisma.Decimal, { message: "Field 'commited' must be a Decimal. Location: ['Models', 'crms_m_products']"}).nullish(),
  reorder_level: z.instanceof(Prisma.Decimal, { message: "Field 'reorder_level' must be a Decimal. Location: ['Models', 'crms_m_products']"}).nullish(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  product_image: z.string().nullish(),
  category: z.number().nullish(),
})

export type crms_m_products = z.infer<typeof crms_m_productsSchema>

export default crms_m_productsSchema;
