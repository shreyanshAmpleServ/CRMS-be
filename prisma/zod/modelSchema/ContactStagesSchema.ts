import { z } from 'zod';

/////////////////////////////////////////
// CONTACT STAGES SCHEMA
/////////////////////////////////////////

export const ContactStagesSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  displayorder: z.number().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type ContactStages = z.infer<typeof ContactStagesSchema>

export default ContactStagesSchema;
