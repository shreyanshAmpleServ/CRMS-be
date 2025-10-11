import { z } from 'zod';

export const Crms_leadsScalarFieldEnumSchema = z.enum(['id','lead_owner','first_name','last_name','title','email','phone','fax','mobile','website','lead_source','lead_status','industry','no_of_employees','annual_revenue','revenue_currency','rating','tags','email_opt_out','secondary_email','facebook_ac','skype_id','twitter_ac','linked_in_ac','whatsapp_ac','instagram_ac','street','city','state','zipcode','country','description','is_active','createdate','updatedate','createdby','updatedby','log_inst','company_icon','company_id','jobTitle']);

export default Crms_leadsScalarFieldEnumSchema;
