"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_productsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS M PRODUCTS SCHEMA
/////////////////////////////////////////
exports.crms_m_productsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    code: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    vendor_id: zod_1.z.number().nullish(),
    manufacturer_id: zod_1.z.number().nullish(),
    tax_id: zod_1.z.number().nullish(),
    unit_price: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'unit_price' must be a Decimal. Location: ['Models', 'crms_m_products']" }).nullish(),
    currency: zod_1.z.number().nullish(),
    onhand: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'onhand' must be a Decimal. Location: ['Models', 'crms_m_products']" }).nullish(),
    ordered: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'ordered' must be a Decimal. Location: ['Models', 'crms_m_products']" }).nullish(),
    commited: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'commited' must be a Decimal. Location: ['Models', 'crms_m_products']" }).nullish(),
    reorder_level: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'reorder_level' must be a Decimal. Location: ['Models', 'crms_m_products']" }).nullish(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    product_image: zod_1.z.string().nullish(),
    category: zod_1.z.number().nullish(),
});
exports.default = exports.crms_m_productsSchema;
