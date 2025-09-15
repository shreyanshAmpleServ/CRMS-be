"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_template_itemsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS TEMPLATE ITEMS SCHEMA
/////////////////////////////////////////
exports.crms_template_itemsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.number().nullish(),
    item_id: zod_1.z.number().nullish(),
    description: zod_1.z.string().nullish(),
    qty: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'qty' must be a Decimal. Location: ['Models', 'crms_template_items']" }).nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.crms_template_itemsSchema;
