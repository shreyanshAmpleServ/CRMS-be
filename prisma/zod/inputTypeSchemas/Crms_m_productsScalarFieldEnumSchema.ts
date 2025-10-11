import { z } from 'zod';

export const Crms_m_productsScalarFieldEnumSchema = z.enum(['id','code','name','description','is_active','vendor_id','manufacturer_id','tax_id','unit_price','currency','onhand','ordered','commited','reorder_level','createdate','updatedate','createdby','updatedby','log_inst','product_image','category']);

export default Crms_m_productsScalarFieldEnumSchema;
