import { z } from 'zod';

export const Crms_commentsScalarFieldEnumSchema = z.enum(['id','parent_id','comments','user_name','user_id','obj_name','obj_id','created_at']);

export default Crms_commentsScalarFieldEnumSchema;
