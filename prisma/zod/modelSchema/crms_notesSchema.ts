import { z } from 'zod';

/////////////////////////////////////////
// CRMS NOTES SCHEMA
/////////////////////////////////////////

export const crms_notesSchema = z.object({
  id: z.number(),
  title: z.string(),
  note: z.string().nullish(),
  attachment: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_notes = z.infer<typeof crms_notesSchema>

export default crms_notesSchema;
