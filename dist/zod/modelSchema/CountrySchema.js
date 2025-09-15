"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// COUNTRY SCHEMA
/////////////////////////////////////////
exports.CountrySchema = zod_1.z.object({
    id: zod_1.z.number(),
    code: zod_1.z.string(),
    name: zod_1.z.string(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    createdby: zod_1.z.number(),
    log_inst: zod_1.z.number().nullish(),
    updatedate: zod_1.z.coerce.date().nullish(),
    updatedby: zod_1.z.number().nullish(),
});
exports.default = exports.CountrySchema;
