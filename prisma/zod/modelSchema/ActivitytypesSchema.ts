import { z } from 'zod';

/////////////////////////////////////////
// ACTIVITYTYPES SCHEMA
/////////////////////////////////////////

export const ActivitytypesSchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.string(),
  icon: z.string().nullish(),
  createdate: z.coerce.date(),
  updatedate: z.coerce.date().nullish(),
  createdby: z.number(),
  updatedby: z.number().nullish(),
  log_inst: z.number().nullish(),
})

export type Activitytypes = z.infer<typeof ActivitytypesSchema>

export default ActivitytypesSchema;
