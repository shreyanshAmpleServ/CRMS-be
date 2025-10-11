import { z } from 'zod';

export const Crms_users_email_authScalarFieldEnumSchema = z.enum(['id','user_id','email_id','access_token','refresh_token','email_provider','expire_datetime','other_info']);

export default Crms_users_email_authScalarFieldEnumSchema;
