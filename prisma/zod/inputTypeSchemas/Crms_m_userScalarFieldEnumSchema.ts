import { z } from 'zod';

export const Crms_m_userScalarFieldEnumSchema = z.enum(['id','username','password','email','full_name','is_active','log_inst','createdate','updatedate','createdby','updatedby','address','phone','profile_img']);

export default Crms_m_userScalarFieldEnumSchema;
