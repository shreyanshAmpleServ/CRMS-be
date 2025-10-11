import { z } from 'zod';

export const Crms_d_quotationsScalarFieldEnumSchema = z.enum(['id','vendor_id','template_master_id','quotation_code','address','cust_ref_no','cont_person','confirmation_email','currency','due_date','total_bef_tax','disc_prcnt','tax_total','doc_total','source_doc_id','source_doc_type','rounding','remarks','shipto','billto','sales_type','apr_status','apr_by','apr_date','apr_remark','auto_approved','status','e_signature','payment_confirmation','createdby','updatedby','createdate','updatedate','total_amount','rounding_amount','attachment1','attachment2','terms','optional_items','other_items']);

export default Crms_d_quotationsScalarFieldEnumSchema;
