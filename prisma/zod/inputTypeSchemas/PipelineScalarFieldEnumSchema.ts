import { z } from 'zod';

export const PipelineScalarFieldEnumSchema = z.enum(['id','name','description','is_active','log_inst','createdDate','updatedDate','createdBy','updatedBy']);

export default PipelineScalarFieldEnumSchema;
