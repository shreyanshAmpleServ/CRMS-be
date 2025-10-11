import { z } from 'zod';

/////////////////////////////////////////
// CRMS ATTACHMENTS SCHEMA
/////////////////////////////////////////

export const crms_attachmentsSchema = z.object({
  id: z.number(),
  related_entity_type: z.string().nullish(),
  related_entity_id: z.number().nullish(),
  filename: z.string().nullish(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
  description: z.string().nullish(),
  file: z.string().nullish(),
  file_type: z.string().nullish(),
  related_entity_name: z.string().nullish(),
})

export type crms_attachments = z.infer<typeof crms_attachmentsSchema>

export default crms_attachmentsSchema;
