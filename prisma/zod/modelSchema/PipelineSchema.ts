import { z } from 'zod';

/////////////////////////////////////////
// PIPELINE SCHEMA
/////////////////////////////////////////

export const PipelineSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  log_inst: z.number(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
})

export type Pipeline = z.infer<typeof PipelineSchema>

export default PipelineSchema;
