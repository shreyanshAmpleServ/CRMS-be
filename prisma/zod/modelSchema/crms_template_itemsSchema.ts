import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS TEMPLATE ITEMS SCHEMA
/////////////////////////////////////////

export const crms_template_itemsSchema = z.object({
  id: z.number(),
  parent_id: z.number().nullish(),
  item_id: z.number().nullish(),
  description: z.string().nullish(),
  qty: z.instanceof(Prisma.Decimal, { message: "Field 'qty' must be a Decimal. Location: ['Models', 'crms_template_items']"}).nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_template_items = z.infer<typeof crms_template_itemsSchema>

export default crms_template_itemsSchema;
