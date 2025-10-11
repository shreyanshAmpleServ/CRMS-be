import { z } from 'zod';

export const StageScalarFieldEnumSchema = z.enum(['id','name','order','pipelineId','is_active','log_inst','createdDate','updatedDate','createdBy','updatedBy','colorCode']);

export default StageScalarFieldEnumSchema;
