import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// SALES D BLANKET AGREEMENT LINE SCHEMA
/////////////////////////////////////////

export const sales_d_blanket_agreement_lineSchema = z.object({
  id: z.number(),
  parent_id: z.number().nullish(),
  line_no: z.number().nullish(),
  item_code: z.string().nullish(),
  description: z.string().nullish(),
  quantity: z.instanceof(Prisma.Decimal, { message: "Field 'quantity' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
  delivered_qty: z.instanceof(Prisma.Decimal, { message: "Field 'delivered_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
  open_qty: z.instanceof(Prisma.Decimal, { message: "Field 'open_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
  uom: z.string().nullish(),
  unit_price: z.instanceof(Prisma.Decimal, { message: "Field 'unit_price' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
  currency_code: z.string().nullish(),
  line_total: z.instanceof(Prisma.Decimal, { message: "Field 'line_total' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
  warehouse_id: z.number().nullish(),
  required_date: z.coerce.date().nullish(),
  need_by_date: z.coerce.date().nullish(),
  project_code: z.string().nullish(),
  budget_code: z.string().nullish(),
  gl_account_code: z.string().nullish(),
  tax_code: z.string().nullish(),
  line_status: z.string().nullish(),
  remarks: z.string().nullish(),
  base_type: z.string().nullish(),
  base_entry: z.number().nullish(),
  base_line: z.number().nullish(),
  target_type: z.string().nullish(),
  target_entry: z.number().nullish(),
  target_line: z.number().nullish(),
  vis_order: z.number().nullish(),
  line_type: z.string().nullish(),
  tree_type: z.string().nullish(),
  manual_batch_num: z.string().nullish(),
  uom_entry: z.number().nullish(),
  uom_code: z.string().nullish(),
  planned_qty: z.instanceof(Prisma.Decimal, { message: "Field 'planned_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
  open_planned_qty: z.instanceof(Prisma.Decimal, { message: "Field 'open_planned_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']"}).nullish(),
})

export type sales_d_blanket_agreement_line = z.infer<typeof sales_d_blanket_agreement_lineSchema>

export default sales_d_blanket_agreement_lineSchema;
