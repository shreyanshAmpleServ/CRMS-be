"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_pricebook_detailsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS M PRICEBOOK DETAILS SCHEMA
/////////////////////////////////////////
exports.crms_m_pricebook_detailsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.number(),
    from_price: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'from_price' must be a Decimal. Location: ['Models', 'crms_m_pricebook_details']" }).nullish(),
    to_price: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'to_price' must be a Decimal. Location: ['Models', 'crms_m_pricebook_details']" }).nullish(),
    discount_per: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'discount_per' must be a Decimal. Location: ['Models', 'crms_m_pricebook_details']" }).nullish(),
});
exports.default = exports.crms_m_pricebook_detailsSchema;
