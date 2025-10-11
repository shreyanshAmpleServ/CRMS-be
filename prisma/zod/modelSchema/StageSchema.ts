import { z } from 'zod';

/////////////////////////////////////////
// STAGE SCHEMA
/////////////////////////////////////////

export const StageSchema = z.object({
  id: z.number(),
  name: z.string(),
  order: z.number(),
  pipelineId: z.number(),
  is_active: z.string(),
  log_inst: z.number(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
  colorCode: z.string().nullish(),
})

export type Stage = z.infer<typeof StageSchema>

export default StageSchema;
