import { z } from 'zod';

export const Crms_notesScalarFieldEnumSchema = z.enum(['id','title','note','attachment','is_active','createdate','updatedate','createdby','updatedby','log_inst']);

export default Crms_notesScalarFieldEnumSchema;
