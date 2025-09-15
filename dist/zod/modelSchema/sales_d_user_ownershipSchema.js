"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sales_d_user_ownershipSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// SALES D USER OWNERSHIP SCHEMA
/////////////////////////////////////////
exports.sales_d_user_ownershipSchema = zod_1.z.object({
    id: zod_1.z.number(),
    entity_type: zod_1.z.string().nullish(),
    entity_id: zod_1.z.number().nullish(),
    owner_user_id: zod_1.z.number().nullish(),
    shared_with_user_id: zod_1.z.number().nullish(),
    role_type: zod_1.z.string().nullish(),
    assigned_on: zod_1.z.coerce.date().nullish(),
});
exports.default = exports.sales_d_user_ownershipSchema;
