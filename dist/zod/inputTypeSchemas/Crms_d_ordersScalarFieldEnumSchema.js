"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_ordersScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_ordersScalarFieldEnumSchema = zod_1.z.enum(['id', 'order_code', 'cust_id', 'address', 'cust_ref_no', 'cont_person', 'currency', 'due_date', 'total_bef_tax', 'disc_prcnt', 'tax_total', 'doc_total', 'source_doc_id', 'source_doc_type', 'rounding', 'remarks', 'shipto', 'billto', 'sales_type', 'apr_status', 'apr_by', 'apr_date', 'apr_remark', 'auto_approved', 'status', 'createdby', 'updatedby', 'createdate', 'updatedate', 'total_amount', 'rounding_amount', 'attachment1', 'attachment2']);
exports.default = exports.Crms_d_ordersScalarFieldEnumSchema;
