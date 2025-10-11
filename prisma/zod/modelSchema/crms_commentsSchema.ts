import { z } from 'zod';

/////////////////////////////////////////
// CRMS COMMENTS SCHEMA
/////////////////////////////////////////

export const crms_commentsSchema = z.object({
  id: z.number(),
  parent_id: z.number().nullish(),
  comments: z.string().nullish(),
  user_name: z.string().nullish(),
  user_id: z.number().nullish(),
  obj_name: z.string().nullish(),
  obj_id: z.number().nullish(),
  created_at: z.coerce.date().nullish(),
})

export type crms_comments = z.infer<typeof crms_commentsSchema>

export default crms_commentsSchema;
