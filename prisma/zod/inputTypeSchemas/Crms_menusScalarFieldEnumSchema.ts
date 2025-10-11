import { z } from 'zod';

export const Crms_menusScalarFieldEnumSchema = z.enum(['id','menu_label','routes','icon','parent_menu_id','is_active','order_by']);

export default Crms_menusScalarFieldEnumSchema;
