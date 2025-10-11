import { z } from 'zod';

export const LostReasonsScalarFieldEnumSchema = z.enum(['id','name','description','is_active','createdate','updatedate','createdby','updatedby','log_inst','colorCode','order']);

export default LostReasonsScalarFieldEnumSchema;
