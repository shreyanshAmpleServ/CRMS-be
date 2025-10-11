import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS M PRICEBOOK DETAILS SCHEMA
/////////////////////////////////////////

export const crms_m_pricebook_detailsSchema = z.object({
  id: z.number(),
  parent_id: z.number(),
  from_price: z.instanceof(Prisma.Decimal, { message: "Field 'from_price' must be a Decimal. Location: ['Models', 'crms_m_pricebook_details']"}).nullish(),
  to_price: z.instanceof(Prisma.Decimal, { message: "Field 'to_price' must be a Decimal. Location: ['Models', 'crms_m_pricebook_details']"}).nullish(),
  discount_per: z.instanceof(Prisma.Decimal, { message: "Field 'discount_per' must be a Decimal. Location: ['Models', 'crms_m_pricebook_details']"}).nullish(),
})

export type crms_m_pricebook_details = z.infer<typeof crms_m_pricebook_detailsSchema>

export default crms_m_pricebook_detailsSchema;
