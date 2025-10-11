import { z } from 'zod';

export const Crms_m_contactScalarFieldEnumSchema = z.enum(['id','firstName','lastName','jobTitle','email','emailOptOut','phone1','phone2','fax','dateOfBirth','reviews','owner','tags','source','industry','currency','language','description','streetAddress','city','state','country','zipcode','socialProfiles','visibility','is_active','log_inst','createdate','updatedate','createdby','updatedby','image','company_id','deal_id']);

export default Crms_m_contactScalarFieldEnumSchema;
