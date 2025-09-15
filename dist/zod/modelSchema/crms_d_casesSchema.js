"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_casesSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D CASES SCHEMA
/////////////////////////////////////////
exports.crms_d_casesSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    is_active: zod_1.z.string(),
    case_number: zod_1.z.string(),
    product_id: zod_1.z.number().nullish(),
    case_status: zod_1.z.string(),
    case_type: zod_1.z.string(),
    case_priority: zod_1.z.string(),
    case_origin: zod_1.z.string(),
    case_reason: zod_1.z.number().nullish(),
    contact_id: zod_1.z.number().nullish(),
    subject: zod_1.z.string().nullish(),
    account_id: zod_1.z.number().nullish(),
    deal_id: zod_1.z.number().nullish(),
    reported_by: zod_1.z.string().nullish(),
    email: zod_1.z.string().nullish(),
    phone: zod_1.z.string().nullish(),
    description: zod_1.z.string(),
    createdate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedate: zod_1.z.coerce.date().nullish(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    case_owner_id: zod_1.z.number().nullish(),
});
exports.default = exports.crms_d_casesSchema;
