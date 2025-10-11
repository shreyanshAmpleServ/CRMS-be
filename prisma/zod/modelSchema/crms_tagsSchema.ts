import { z } from 'zod';

/////////////////////////////////////////
// CRMS TAGS SCHEMA
/////////////////////////////////////////

export const crms_tagsSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  tagtype: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_tags = z.infer<typeof crms_tagsSchema>

export default crms_tagsSchema;
