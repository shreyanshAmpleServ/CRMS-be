"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencySchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CURRENCY SCHEMA
/////////////////////////////////////////
exports.CurrencySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    code: zod_1.z.string(),
    icon: zod_1.z.string().nullish(),
    is_default: zod_1.z.string(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.CurrencySchema;
