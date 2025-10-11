import { z } from 'zod';

/////////////////////////////////////////
// CRMS AUDIT LOGS SCHEMA
/////////////////////////////////////////

export const crms_audit_logsSchema = z.object({
  id: z.number(),
  table_name: z.string().nullish(),
  record_id: z.number().nullish(),
  field_name: z.string().nullish(),
  old_value: z.string().nullish(),
  new_value: z.string().nullish(),
  obj_name: z.string().nullish(),
  obj_id: z.number().nullish(),
  action: z.string().nullish(),
  updated_by: z.number().nullish(),
  updated_by_name: z.string().nullish(),
  updated_at: z.coerce.date().nullish(),
})

export type crms_audit_logs = z.infer<typeof crms_audit_logsSchema>

export default crms_audit_logsSchema;
