import { z } from 'zod';

export const Crms_m_vendorScalarFieldEnumSchema = z.enum(['id','name','phone','email','is_active','account_owner','website','glaccount','category','email_opt_out','billing_street','billing_city','billing_state','billing_zipcode','billing_country','description','createdate','updatedate','createdby','updatedby','log_inst','profile_img']);

export default Crms_m_vendorScalarFieldEnumSchema;
