"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_purchase_invoice_itemsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_purchase_invoice_itemsScalarFieldEnumSchema = zod_1.z.enum(['id', 'item_id', 'item_name', 'quantity', 'delivered_qty', 'unit_price', 'currency', 'rate', 'disc_prcnt', 'tax_id', 'tax_per', 'line_tax', 'total_bef_disc', 'total_amount', 'parent_id', 'disc_amount']);
exports.default = exports.Crms_d_purchase_invoice_itemsScalarFieldEnumSchema;
