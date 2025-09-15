"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_invoice_itemsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS D INVOICE ITEMS SCHEMA
/////////////////////////////////////////
exports.crms_d_invoice_itemsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    item_id: zod_1.z.number(),
    item_name: zod_1.z.string().nullish(),
    quantity: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'quantity' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    delivered_qty: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'delivered_qty' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    unit_price: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'unit_price' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    currency: zod_1.z.number().nullish(),
    rate: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'rate' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    disc_prcnt: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'disc_prcnt' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    tax_id: zod_1.z.number().nullish(),
    tax_per: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'tax_per' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    line_tax: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'line_tax' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    total_bef_disc: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'total_bef_disc' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    total_amount: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'total_amount' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
    parent_id: zod_1.z.number(),
    disc_amount: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'disc_amount' must be a Decimal. Location: ['Models', 'crms_d_invoice_items']" }).nullish(),
});
exports.default = exports.crms_d_invoice_itemsSchema;
