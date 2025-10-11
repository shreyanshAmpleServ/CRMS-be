import { z } from 'zod';

/////////////////////////////////////////
// DEAL HISTORY SCHEMA
/////////////////////////////////////////

export const DealHistorySchema = z.object({
  id: z.number(),
  dealId: z.number(),
  oldStage: z.string(),
  newStage: z.string(),
  changedAt: z.coerce.date(),
})

export type DealHistory = z.infer<typeof DealHistorySchema>

export default DealHistorySchema;
