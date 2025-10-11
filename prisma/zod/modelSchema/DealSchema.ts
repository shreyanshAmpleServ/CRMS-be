import { z } from 'zod';

/////////////////////////////////////////
// DEAL SCHEMA
/////////////////////////////////////////

export const DealSchema = z.object({
  id: z.number(),
  dealName: z.string(),
  status: z.string().nullish(),
  dealValue: z.number().nullish(),
  currency_id: z.number().nullish(),
  country_id: z.number().nullish(),
  period: z.string().nullish(),
  periodValue: z.number().nullish(),
  dueDate: z.coerce.date(),
  expectedCloseDate: z.coerce.date(),
  followUpDate: z.coerce.date().nullish(),
  assigneeId: z.number().nullish(),
  source: z.string().nullish(),
  priority: z.string(),
  tags: z.string().nullish(),
  description: z.string(),
  is_active: z.string(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
  logInst: z.number().nullish(),
  pipelineId: z.number().nullish(),
  stageId: z.number().nullish(),
})

export type Deal = z.infer<typeof DealSchema>

export default DealSchema;
