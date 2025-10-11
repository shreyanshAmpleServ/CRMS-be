import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS D INVOICE SCHEMA
/////////////////////////////////////////

export const crms_d_invoiceSchema = z.object({
  id: z.number(),
  cust_id: z.number(),
  order_code: z.string().nullish(),
  address: z.string().nullish(),
  cust_ref_no: z.string().nullish(),
  cont_person: z.string().nullish(),
  currency: z.number().nullish(),
  due_date: z.coerce.date().nullish(),
  total_bef_tax: z.instanceof(Prisma.Decimal, { message: "Field 'total_bef_tax' must be a Decimal. Location: ['Models', 'crms_d_invoice']"}).nullish(),
  disc_prcnt: z.instanceof(Prisma.Decimal, { message: "Field 'disc_prcnt' must be a Decimal. Location: ['Models', 'crms_d_invoice']"}).nullish(),
  tax_total: z.instanceof(Prisma.Decimal, { message: "Field 'tax_total' must be a Decimal. Location: ['Models', 'crms_d_invoice']"}).nullish(),
  doc_total: z.instanceof(Prisma.Decimal, { message: "Field 'doc_total' must be a Decimal. Location: ['Models', 'crms_d_invoice']"}).nullish(),
  source_doc_id: z.string().nullish(),
  source_doc_type: z.string().nullish(),
  rounding: z.string().nullish(),
  remarks: z.string().nullish(),
  shipto: z.string().nullish(),
  billto: z.string().nullish(),
  sales_type: z.number().nullish(),
  apr_status: z.string(),
  apr_by: z.string().nullish(),
  apr_date: z.coerce.date().nullish(),
  apr_remark: z.string().nullish(),
  auto_approved: z.string().nullish(),
  status: z.string().nullish(),
  createdby: z.number().nullish(),
  updatedby: z.number().nullish(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date(),
  total_amount: z.instanceof(Prisma.Decimal, { message: "Field 'total_amount' must be a Decimal. Location: ['Models', 'crms_d_invoice']"}).nullish(),
  rounding_amount: z.instanceof(Prisma.Decimal, { message: "Field 'rounding_amount' must be a Decimal. Location: ['Models', 'crms_d_invoice']"}).nullish(),
  attachment1: z.string().nullish(),
  attachment2: z.string().nullish(),
})

export type crms_d_invoice = z.infer<typeof crms_d_invoiceSchema>

export default crms_d_invoiceSchema;
