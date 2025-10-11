import { z } from 'zod';

/////////////////////////////////////////
// SALES D ATTACHMENT SCHEMA
/////////////////////////////////////////

export const sales_d_attachmentSchema = z.object({
  id: z.number(),
  entity_type: z.string().nullish(),
  entity_id: z.number().nullish(),
  file_name: z.string().nullish(),
  file_path: z.string().nullish(),
  uploaded_by: z.number().nullish(),
  uploaded_on: z.coerce.date().nullish(),
})

export type sales_d_attachment = z.infer<typeof sales_d_attachmentSchema>

export default sales_d_attachmentSchema;
