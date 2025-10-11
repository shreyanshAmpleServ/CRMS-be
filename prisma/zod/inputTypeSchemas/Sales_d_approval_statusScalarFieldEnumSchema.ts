import { z } from 'zod';

export const Sales_d_approval_statusScalarFieldEnumSchema = z.enum(['id','entity_type','entity_id','approver_user_id','approval_stage','approval_status','remarks','action_date']);

export default Sales_d_approval_statusScalarFieldEnumSchema;
