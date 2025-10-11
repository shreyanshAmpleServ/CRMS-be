import { z } from 'zod';

/////////////////////////////////////////
// CRMS CADENCES SCHEMA
/////////////////////////////////////////

export const crms_cadencesSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  is_active: z.string(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
  logInst: z.number().nullish(),
})

export type crms_cadences = z.infer<typeof crms_cadencesSchema>

export default crms_cadencesSchema;
