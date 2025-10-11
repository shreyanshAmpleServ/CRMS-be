import { z } from 'zod';

export const StateScalarFieldEnumSchema = z.enum(['id','name','description','is_active','createdate','updatedate','createdby','updatedby','log_inst']);

export default StateScalarFieldEnumSchema;
