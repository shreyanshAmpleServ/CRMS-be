"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_tax_setupSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS M TAX SETUP SCHEMA
/////////////////////////////////////////
exports.crms_m_tax_setupSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    rate: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'rate' must be a Decimal. Location: ['Models', 'crms_m_tax_setup']" }).nullish(),
    effect_date: zod_1.z.coerce.date().nullish(),
    category: zod_1.z.string(),
    account_id: zod_1.z.number().nullish(),
    account_name: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    createdby: zod_1.z.number(),
    updatedate: zod_1.z.coerce.date().nullish(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    external_code: zod_1.z.string().nullish(),
    validFrom: zod_1.z.coerce.date(),
    validTo: zod_1.z.coerce.date(),
});
exports.default = exports.crms_m_tax_setupSchema;
