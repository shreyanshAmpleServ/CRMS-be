import { z } from 'zod';

/////////////////////////////////////////
// CRMS CALLS SCHEMA
/////////////////////////////////////////

export const crms_callsSchema = z.object({
  id: z.number(),
  call_for: z.string(),
  assigned_to: z.number().nullish(),
  related_to: z.string(),
  related_to_id: z.number().nullish(),
  call_purpose_id: z.number(),
  call_status_id: z.number().nullish(),
  call_type_id: z.number().nullish(),
  call_start_date: z.coerce.date(),
  call_start_time: z.coerce.date(),
  duration_minutes: z.number().nullish(),
  call_subject: z.string(),
  call_reminder: z.number().nullish(),
  call_notes: z.string().nullish(),
  follow_up_needed: z.string().nullish(),
  follow_up_date: z.coerce.date().nullish(),
  call_for_contact_id: z.number().nullish(),
  call_for_lead_id: z.number().nullish(),
  call_for_project_id: z.number().nullish(),
  reminder_type: z.string().nullish(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  ongoing_callStatus: z.string(),
})

export type crms_calls = z.infer<typeof crms_callsSchema>

export default crms_callsSchema;
