import { z } from 'zod';

/////////////////////////////////////////
// CRMS D ACTIVITIES SCHEMA
/////////////////////////////////////////

export const crms_d_activitiesSchema = z.object({
  id: z.number(),
  title: z.string().nullish(),
  type_id: z.number().nullish(),
  status: z.string().nullish(),
  due_date: z.coerce.date().nullish(),
  due_time: z.coerce.date().nullish(),
  priority: z.number().nullish(),
  is_reminder: z.string().nullish(),
  reminder_time: z.string().nullish(),
  reminder_type: z.string().nullish(),
  notify_by: z.string().nullish(),
  owner_id: z.number(),
  description: z.string().nullish(),
  deal_id: z.number().nullish(),
  contact_id: z.number().nullish(),
  company_id: z.number().nullish(),
  is_active: z.string().nullish(),
  createddate: z.coerce.date().nullish(),
  updateddate: z.coerce.date().nullish(),
  createdby: z.number().nullish(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  project_id: z.number().nullish(),
})

export type crms_d_activities = z.infer<typeof crms_d_activitiesSchema>

export default crms_d_activitiesSchema;
