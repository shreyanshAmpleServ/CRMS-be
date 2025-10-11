import { z } from 'zod';

/////////////////////////////////////////
// CRMS D CAMPAIGN SCHEMA
/////////////////////////////////////////

export const crms_d_campaignSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string().nullish(),
  exp_revenue: z.number().nullish(),
  camp_cost: z.number().nullish(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
  description: z.string().nullish(),
  is_active: z.string(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
  logInst: z.number().nullish(),
  type: z.string().nullish(),
  owner_id: z.number(),
})

export type crms_d_campaign = z.infer<typeof crms_d_campaignSchema>

export default crms_d_campaignSchema;
