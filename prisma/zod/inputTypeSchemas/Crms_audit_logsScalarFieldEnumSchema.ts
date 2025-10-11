import { z } from 'zod';

export const Crms_audit_logsScalarFieldEnumSchema = z.enum(['id','table_name','record_id','field_name','old_value','new_value','obj_name','obj_id','action','updated_by','updated_by_name','updated_at']);

export default Crms_audit_logsScalarFieldEnumSchema;
