"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_sales_typesSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D SALES TYPES SCHEMA
/////////////////////////////////////////
exports.crms_d_sales_typesSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    is_active: zod_1.z.string().nullish(),
});
exports.default = exports.crms_d_sales_typesSchema;
