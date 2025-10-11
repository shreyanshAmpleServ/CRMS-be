import { z } from 'zod';

/////////////////////////////////////////
// CRMS D USER ROLE SCHEMA
/////////////////////////////////////////

export const crms_d_user_roleSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  role_id: z.number(),
  is_active: z.string(),
  log_inst: z.number(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
})

export type crms_d_user_role = z.infer<typeof crms_d_user_roleSchema>

export default crms_d_user_roleSchema;
