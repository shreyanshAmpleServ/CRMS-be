"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_purchase_ordersSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS D PURCHASE ORDERS SCHEMA
/////////////////////////////////////////
exports.crms_d_purchase_ordersSchema = zod_1.z.object({
    id: zod_1.z.number(),
    cust_id: zod_1.z.number(),
    order_code: zod_1.z.string().nullish(),
    address: zod_1.z.string().nullish(),
    cust_ref_no: zod_1.z.string().nullish(),
    cont_person: zod_1.z.string().nullish(),
    currency: zod_1.z.number().nullish(),
    due_date: zod_1.z.coerce.date().nullish(),
    total_bef_tax: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'total_bef_tax' must be a Decimal. Location: ['Models', 'crms_d_purchase_orders']" }).nullish(),
    disc_prcnt: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'disc_prcnt' must be a Decimal. Location: ['Models', 'crms_d_purchase_orders']" }).nullish(),
    tax_total: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'tax_total' must be a Decimal. Location: ['Models', 'crms_d_purchase_orders']" }).nullish(),
    doc_total: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'doc_total' must be a Decimal. Location: ['Models', 'crms_d_purchase_orders']" }).nullish(),
    source_doc_id: zod_1.z.string().nullish(),
    source_doc_type: zod_1.z.string().nullish(),
    rounding: zod_1.z.string().nullish(),
    remarks: zod_1.z.string().nullish(),
    shipto: zod_1.z.string().nullish(),
    billto: zod_1.z.string().nullish(),
    sales_type: zod_1.z.number().nullish(),
    apr_status: zod_1.z.string(),
    apr_by: zod_1.z.string().nullish(),
    apr_date: zod_1.z.coerce.date().nullish(),
    apr_remark: zod_1.z.string().nullish(),
    auto_approved: zod_1.z.string().nullish(),
    status: zod_1.z.string().nullish(),
    createdby: zod_1.z.number().nullish(),
    updatedby: zod_1.z.number().nullish(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date(),
    total_amount: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'total_amount' must be a Decimal. Location: ['Models', 'crms_d_purchase_orders']" }).nullish(),
    rounding_amount: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'rounding_amount' must be a Decimal. Location: ['Models', 'crms_d_purchase_orders']" }).nullish(),
    attachment1: zod_1.z.string().nullish(),
    attachment2: zod_1.z.string().nullish(),
});
exports.default = exports.crms_d_purchase_ordersSchema;
