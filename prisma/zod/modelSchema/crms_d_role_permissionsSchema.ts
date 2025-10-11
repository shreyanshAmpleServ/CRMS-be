import { z } from 'zod';

/////////////////////////////////////////
// CRMS D ROLE PERMISSIONS SCHEMA
/////////////////////////////////////////

export const crms_d_role_permissionsSchema = z.object({
  id: z.number(),
  role_id: z.number(),
  permissions: z.string(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
})

export type crms_d_role_permissions = z.infer<typeof crms_d_role_permissionsSchema>

export default crms_d_role_permissionsSchema;
