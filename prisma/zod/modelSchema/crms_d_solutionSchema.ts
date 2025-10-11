import { z } from 'zod';

/////////////////////////////////////////
// CRMS D SOLUTION SCHEMA
/////////////////////////////////////////

export const crms_d_solutionSchema = z.object({
  id: z.number(),
  title: z.string(),
  is_active: z.string(),
  solution_owner: z.number().nullish(),
  product_id: z.number().nullish(),
  status: z.string(),
  question: z.string(),
  answer: z.string().nullish(),
  createdate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedate: z.coerce.date().nullish(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_d_solution = z.infer<typeof crms_d_solutionSchema>

export default crms_d_solutionSchema;
