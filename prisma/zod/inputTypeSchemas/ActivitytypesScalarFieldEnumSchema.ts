import { z } from 'zod';

export const ActivitytypesScalarFieldEnumSchema = z.enum(['id','name','is_active','icon','createdate','updatedate','createdby','updatedby','log_inst']);

export default ActivitytypesScalarFieldEnumSchema;
