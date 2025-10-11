import { z } from 'zod';

export const ContactStagesScalarFieldEnumSchema = z.enum(['id','name','description','displayorder','is_active','createdate','updatedate','createdby','updatedby','log_inst']);

export default ContactStagesScalarFieldEnumSchema;
