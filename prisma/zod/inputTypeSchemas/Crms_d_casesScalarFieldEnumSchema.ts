import { z } from 'zod';

export const Crms_d_casesScalarFieldEnumSchema = z.enum(['id','name','is_active','case_number','product_id','case_status','case_type','case_priority','case_origin','case_reason','contact_id','subject','account_id','deal_id','reported_by','email','phone','description','createdate','createdby','updatedate','updatedby','log_inst','case_owner_id']);

export default Crms_d_casesScalarFieldEnumSchema;
