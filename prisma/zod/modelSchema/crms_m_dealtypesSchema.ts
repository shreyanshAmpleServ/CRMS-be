import { z } from 'zod';

/////////////////////////////////////////
// CRMS M DEALTYPES SCHEMA
/////////////////////////////////////////

export const crms_m_dealtypesSchema = z.object({
  id: z.number(),
  typename: z.string(),
  is_active: z.string(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type crms_m_dealtypes = z.infer<typeof crms_m_dealtypesSchema>

export default crms_m_dealtypesSchema;
