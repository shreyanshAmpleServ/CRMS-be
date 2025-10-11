import { z } from 'zod';

export const Crms_attachmentsScalarFieldEnumSchema = z.enum(['id','related_entity_type','related_entity_id','filename','is_active','createdate','updatedate','createdby','updatedby','log_inst','description','file','file_type','related_entity_name']);

export default Crms_attachmentsScalarFieldEnumSchema;
