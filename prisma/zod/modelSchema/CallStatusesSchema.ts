import { z } from 'zod';

/////////////////////////////////////////
// CALL STATUSES SCHEMA
/////////////////////////////////////////

export const CallStatusesSchema = z.object({
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

export type CallStatuses = z.infer<typeof CallStatusesSchema>

export default CallStatusesSchema;
