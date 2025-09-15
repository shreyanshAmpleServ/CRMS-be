"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sales_d_blanket_agreement_lineSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// SALES D BLANKET AGREEMENT LINE SCHEMA
/////////////////////////////////////////
exports.sales_d_blanket_agreement_lineSchema = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.number().nullish(),
    line_no: zod_1.z.number().nullish(),
    item_code: zod_1.z.string().nullish(),
    description: zod_1.z.string().nullish(),
    quantity: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'quantity' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
    delivered_qty: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'delivered_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
    open_qty: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'open_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
    uom: zod_1.z.string().nullish(),
    unit_price: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'unit_price' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
    currency_code: zod_1.z.string().nullish(),
    line_total: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'line_total' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
    warehouse_id: zod_1.z.number().nullish(),
    required_date: zod_1.z.coerce.date().nullish(),
    need_by_date: zod_1.z.coerce.date().nullish(),
    project_code: zod_1.z.string().nullish(),
    budget_code: zod_1.z.string().nullish(),
    gl_account_code: zod_1.z.string().nullish(),
    tax_code: zod_1.z.string().nullish(),
    line_status: zod_1.z.string().nullish(),
    remarks: zod_1.z.string().nullish(),
    base_type: zod_1.z.string().nullish(),
    base_entry: zod_1.z.number().nullish(),
    base_line: zod_1.z.number().nullish(),
    target_type: zod_1.z.string().nullish(),
    target_entry: zod_1.z.number().nullish(),
    target_line: zod_1.z.number().nullish(),
    vis_order: zod_1.z.number().nullish(),
    line_type: zod_1.z.string().nullish(),
    tree_type: zod_1.z.string().nullish(),
    manual_batch_num: zod_1.z.string().nullish(),
    uom_entry: zod_1.z.number().nullish(),
    uom_code: zod_1.z.string().nullish(),
    planned_qty: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'planned_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
    open_planned_qty: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'open_planned_qty' must be a Decimal. Location: ['Models', 'sales_d_blanket_agreement_line']" }).nullish(),
});
exports.default = exports.sales_d_blanket_agreement_lineSchema;
