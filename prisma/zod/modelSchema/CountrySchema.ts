import { z } from 'zod';

/////////////////////////////////////////
// COUNTRY SCHEMA
/////////////////////////////////////////

export const CountrySchema = z.object({
  id: z.number(),
  code: z.string(),
  name: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  createdby: z.number(),
  log_inst: z.number().nullish(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
})

export type Country = z.infer<typeof CountrySchema>

export default CountrySchema;
