import { z } from 'zod';

/////////////////////////////////////////
// CAMPAIGN CONTACTS SCHEMA
/////////////////////////////////////////

export const CampaignContactsSchema = z.object({
  id: z.number(),
  camp_id: z.number(),
  contact_id: z.number(),
  createdDate: z.coerce.date(),
})

export type CampaignContacts = z.infer<typeof CampaignContactsSchema>

export default CampaignContactsSchema;
