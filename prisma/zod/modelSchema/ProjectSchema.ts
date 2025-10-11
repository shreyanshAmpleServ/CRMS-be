import { z } from 'zod';

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  projectTiming: z.string(),
  amount: z.number(),
  startDate: z.coerce.date(),
  dueDate: z.coerce.date().nullish(),
  description: z.string().nullish(),
  is_active: z.string(),
  log_inst: z.number(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
  updatedBy: z.number().nullish(),
})

export type Project = z.infer<typeof ProjectSchema>

export default ProjectSchema;
