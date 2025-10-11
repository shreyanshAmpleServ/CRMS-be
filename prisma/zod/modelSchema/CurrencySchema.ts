import { z } from 'zod';

/////////////////////////////////////////
// CURRENCY SCHEMA
/////////////////////////////////////////

export const CurrencySchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  icon: z.string().nullish(),
  is_default: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type Currency = z.infer<typeof CurrencySchema>

export default CurrencySchema;
