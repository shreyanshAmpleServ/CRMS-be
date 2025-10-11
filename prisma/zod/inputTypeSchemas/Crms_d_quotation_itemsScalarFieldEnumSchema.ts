import { z } from 'zod';

export const Crms_d_quotation_itemsScalarFieldEnumSchema = z.enum(['id','item_id','item_name','quantity','delivered_qty','unit_price','currency','rate','disc_prcnt','tax_id','tax_per','line_tax','total_bef_disc','total_amount','parent_id','disc_amount','is_optional']);

export default Crms_d_quotation_itemsScalarFieldEnumSchema;
