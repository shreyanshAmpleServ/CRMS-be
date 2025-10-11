import { z } from 'zod';

/////////////////////////////////////////
// LOST REASONS SCHEMA
/////////////////////////////////////////

export const LostReasonsSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  colorCode: z.string().nullish(),
  order: z.number().nullish(),
})

export type LostReasons = z.infer<typeof LostReasonsSchema>

export default LostReasonsSchema;
