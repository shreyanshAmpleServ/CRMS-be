import { z } from 'zod';

/////////////////////////////////////////
// SALES D USER OWNERSHIP SCHEMA
/////////////////////////////////////////

export const sales_d_user_ownershipSchema = z.object({
  id: z.number(),
  entity_type: z.string().nullish(),
  entity_id: z.number().nullish(),
  owner_user_id: z.number().nullish(),
  shared_with_user_id: z.number().nullish(),
  role_type: z.string().nullish(),
  assigned_on: z.coerce.date().nullish(),
})

export type sales_d_user_ownership = z.infer<typeof sales_d_user_ownershipSchema>

export default sales_d_user_ownershipSchema;
