import { z } from 'zod';

/////////////////////////////////////////
// INDUSTRIES SCHEMA
/////////////////////////////////////////

export const IndustriesSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type Industries = z.infer<typeof IndustriesSchema>

export default IndustriesSchema;
