import { z } from 'zod';

/////////////////////////////////////////
// CRMS D ROLE PERMISSION SCHEMA
/////////////////////////////////////////

export const crms_d_role_permissionSchema = z.object({
  id: z.number(),
  role_id: z.number(),
  permission_id: z.number(),
  module_id: z.number(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
})

export type crms_d_role_permission = z.infer<typeof crms_d_role_permissionSchema>

export default crms_d_role_permissionSchema;
