import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// CRMS M TAX SETUP SCHEMA
/////////////////////////////////////////

export const crms_m_tax_setupSchema = z.object({
  id: z.number(),
  name: z.string(),
  rate: z.instanceof(Prisma.Decimal, { message: "Field 'rate' must be a Decimal. Location: ['Models', 'crms_m_tax_setup']"}).nullish(),
  effect_date: z.coerce.date().nullish(),
  category: z.string(),
  account_id: z.number().nullish(),
  account_name: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  createdby: z.number(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  external_code: z.string().nullish(),
  validFrom: z.coerce.date(),
  validTo: z.coerce.date(),
})

export type crms_m_tax_setup = z.infer<typeof crms_m_tax_setupSchema>

export default crms_m_tax_setupSchema;
