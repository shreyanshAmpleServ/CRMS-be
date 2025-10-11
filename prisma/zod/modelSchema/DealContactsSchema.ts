import { z } from 'zod';

/////////////////////////////////////////
// DEAL CONTACTS SCHEMA
/////////////////////////////////////////

export const DealContactsSchema = z.object({
  id: z.number(),
  dealId: z.number(),
  contactId: z.number(),
  roleInDeal: z.string().nullish(),
  createdDate: z.coerce.date(),
})

export type DealContacts = z.infer<typeof DealContactsSchema>

export default DealContactsSchema;
