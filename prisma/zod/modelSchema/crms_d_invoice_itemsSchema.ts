import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS D INVOICE ITEMS SCHEMA
/////////////////////////////////////////

export const crms_d_invoice_itemsSchema = z.object({
  id: z.number(),
  item_id: z.number(),
  item_name: z.string().nullish(),
  quantity: z.instanceof(Prisma.Decimal, { message: "Field 'quantity' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  delivered_qty: z.instanceof(Prisma.Decimal, { message: "Field 'delivered_qty' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  unit_price: z.instanceof(Prisma.Decimal, { message: "Field 'unit_price' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  currency: z.number().nullish(),
  rate: z.instanceof(Prisma.Decimal, { message: "Field 'rate' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  disc_prcnt: z.instanceof(Prisma.Decimal, { message: "Field 'disc_prcnt' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  tax_id: z.number().nullish(),
  tax_per: z.instanceof(Prisma.Decimal, { message: "Field 'tax_per' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  line_tax: z.instanceof(Prisma.Decimal, { message: "Field 'line_tax' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  total_bef_disc: z.instanceof(Prisma.Decimal, { message: "Field 'total_bef_disc' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  total_amount: z.instanceof(Prisma.Decimal, { message: "Field 'total_amount' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
  parent_id: z.number(),
  disc_amount: z.instanceof(Prisma.Decimal, { message: "Field 'disc_amount' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']"}).nullish(),
})

export type crms_d_invoice_items = z.infer<typeof crms_d_invoice_itemsSchema>

export default crms_d_invoice_itemsSchema;
