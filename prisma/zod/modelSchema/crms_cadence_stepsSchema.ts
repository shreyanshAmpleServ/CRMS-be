import { z } from 'zod';

/////////////////////////////////////////
// CRMS CADENCE STEPS SCHEMA
/////////////////////////////////////////

export const crms_cadence_stepsSchema = z.object({
  id: z.number(),
  cadence_id: z.number(),
  step_order: z.number(),
  action_type: z.string(),
  template_id: z.number().nullish(),
  description: z.string().nullish(),
  wait_days: z.number(),
})

export type crms_cadence_steps = z.infer<typeof crms_cadence_stepsSchema>

export default crms_cadence_stepsSchema;
