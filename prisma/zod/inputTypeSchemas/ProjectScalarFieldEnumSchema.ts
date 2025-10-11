import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','name','projectTiming','amount','startDate','dueDate','description','is_active','log_inst','createdDate','updatedDate','createdBy','updatedBy']);

export default ProjectScalarFieldEnumSchema;
