"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_pricebookSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M PRICEBOOK SCHEMA
/////////////////////////////////////////
exports.crms_m_pricebookSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    model: zod_1.z.string(),
    is_active: zod_1.z.string(),
    description: zod_1.z.string(),
    effectivate_from: zod_1.z.coerce.date().nullish(),
    effectivate_to: zod_1.z.coerce.date().nullish(),
    createdate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedate: zod_1.z.coerce.date().nullish(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.crms_m_pricebookSchema;
