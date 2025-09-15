"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_statesSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M STATES SCHEMA
/////////////////////////////////////////
exports.crms_m_statesSchema = zod_1.z.object({
    country_code: zod_1.z.number(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    createdby: zod_1.z.number(),
    log_inst: zod_1.z.number().nullish(),
    updatedate: zod_1.z.coerce.date().nullish(),
    updatedby: zod_1.z.number().nullish(),
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
exports.default = exports.crms_m_statesSchema;
