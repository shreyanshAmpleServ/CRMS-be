import { z } from 'zod';

/////////////////////////////////////////
// SALES D APPROVAL STATUS SCHEMA
/////////////////////////////////////////

export const sales_d_approval_statusSchema = z.object({
  id: z.number(),
  entity_type: z.string().nullish(),
  entity_id: z.number().nullish(),
  approver_user_id: z.number().nullish(),
  approval_stage: z.number().nullish(),
  approval_status: z.string().nullish(),
  remarks: z.string().nullish(),
  action_date: z.coerce.date().nullish(),
})

export type sales_d_approval_status = z.infer<typeof sales_d_approval_statusSchema>

export default sales_d_approval_statusSchema;
