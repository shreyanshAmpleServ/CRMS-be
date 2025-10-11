import { z } from 'zod';

export const Sales_d_blanket_agreement_lineScalarFieldEnumSchema = z.enum(['id','parent_id','line_no','item_code','description','quantity','delivered_qty','open_qty','uom','unit_price','currency_code','line_total','warehouse_id','required_date','need_by_date','project_code','budget_code','gl_account_code','tax_code','line_status','remarks','base_type','base_entry','base_line','target_type','target_entry','target_line','vis_order','line_type','tree_type','manual_batch_num','uom_entry','uom_code','planned_qty','open_planned_qty']);

export default Sales_d_blanket_agreement_lineScalarFieldEnumSchema;
