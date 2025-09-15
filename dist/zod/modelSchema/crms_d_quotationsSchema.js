"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_quotationsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS D QUOTATIONS SCHEMA
/////////////////////////////////////////
exports.crms_d_quotationsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    vendor_id: zod_1.z.number(),
    template_master_id: zod_1.z.number().nullish(),
    quotation_code: zod_1.z.string().nullish(),
    address: zod_1.z.string().nullish(),
    cust_ref_no: zod_1.z.string().nullish(),
    cont_person: zod_1.z.string().nullish(),
    confirmation_email: zod_1.z.string().nullish(),
    currency: zod_1.z.number().nullish(),
    due_date: zod_1.z.coerce.date().nullish(),
    total_bef_tax: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'total_bef_tax' must be a Decimal. Location: ['Models', 'crms_d_quotations']" }).nullish(),
    disc_prcnt: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'disc_prcnt' must be a Decimal. Location: ['Models', 'crms_d_quotations']" }).nullish(),
    tax_total: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'tax_total' must be a Decimal. Location: ['Models', 'crms_d_quotations']" }).nullish(),
    doc_total: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'doc_total' must be a Decimal. Location: ['Models', 'crms_d_quotations']" }).nullish(),
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
    e_signature: zod_1.z.string(),
    payment_confirmation: zod_1.z.string(),
    createdby: zod_1.z.number().nullish(),
    updatedby: zod_1.z.number().nullish(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date(),
    total_amount: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'total_amount' must be a Decimal. Location: ['Models', 'crms_d_quotations']" }).nullish(),
    rounding_amount: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'rounding_amount' must be a Decimal. Location: ['Models', 'crms_d_quotations']" }).nullish(),
    attachment1: zod_1.z.string().nullish(),
    attachment2: zod_1.z.string().nullish(),
    terms: zod_1.z.string().nullish(),
    optional_items: zod_1.z.string().nullish(),
    other_items: zod_1.z.string().nullish(),
});
exports.default = exports.crms_d_quotationsSchema;
