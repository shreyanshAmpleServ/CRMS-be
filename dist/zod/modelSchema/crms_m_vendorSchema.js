"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_vendorSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M VENDOR SCHEMA
/////////////////////////////////////////
exports.crms_m_vendorSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    phone: zod_1.z.string().nullish(),
    email: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    account_owner: zod_1.z.number().nullish(),
    website: zod_1.z.string(),
    glaccount: zod_1.z.string(),
    category: zod_1.z.string(),
    email_opt_out: zod_1.z.string(),
    billing_street: zod_1.z.string().nullish(),
    billing_city: zod_1.z.string().nullish(),
    billing_state: zod_1.z.number().nullish(),
    billing_zipcode: zod_1.z.string().nullish(),
    billing_country: zod_1.z.number().nullish(),
    description: zod_1.z.string().nullish(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    profile_img: zod_1.z.string().nullish(),
});
exports.default = exports.crms_m_vendorSchema;
