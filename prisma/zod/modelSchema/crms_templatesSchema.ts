import { z } from 'zod';

/////////////////////////////////////////
// CRMS TEMPLATES SCHEMA
/////////////////////////////////////////

export const crms_templatesSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  content: z.string().nullish(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
  logInst: z.number().nullish(),
})

export type crms_templates = z.infer<typeof crms_templatesSchema>

export default crms_templatesSchema;
