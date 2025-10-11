import { z } from 'zod';

/////////////////////////////////////////
// CRMS M PERMISSION SCHEMA
/////////////////////////////////////////

export const crms_m_permissionSchema = z.object({
  id: z.number(),
  permission_name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
})

export type crms_m_permission = z.infer<typeof crms_m_permissionSchema>

export default crms_m_permissionSchema;
