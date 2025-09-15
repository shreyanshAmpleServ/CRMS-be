"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_moduleSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M MODULE SCHEMA
/////////////////////////////////////////
exports.crms_m_moduleSchema = zod_1.z.object({
    id: zod_1.z.number(),
    module_name: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    module_path: zod_1.z.string().nullish(),
});
exports.default = exports.crms_m_moduleSchema;
