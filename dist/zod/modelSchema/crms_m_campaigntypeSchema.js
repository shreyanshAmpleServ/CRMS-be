"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_campaigntypeSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M CAMPAIGNTYPE SCHEMA
/////////////////////////////////////////
exports.crms_m_campaigntypeSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.crms_m_campaigntypeSchema;
