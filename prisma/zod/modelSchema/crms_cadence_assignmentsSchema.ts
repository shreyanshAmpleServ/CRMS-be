import { z } from 'zod';

/////////////////////////////////////////
// CRMS CADENCE ASSIGNMENTS SCHEMA
/////////////////////////////////////////

export const crms_cadence_assignmentsSchema = z.object({
  id: z.number(),
  cadence_id: z.number(),
  lead_or_customer_id: z.number(),
  current_step_id: z.number().nullish(),
  next_action_date: z.coerce.date().nullish(),
  status: z.string(),
})

export type crms_cadence_assignments = z.infer<typeof crms_cadence_assignmentsSchema>

export default crms_cadence_assignmentsSchema;
