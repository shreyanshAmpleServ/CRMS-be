"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_userSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M USER SCHEMA
/////////////////////////////////////////
exports.crms_m_userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    email: zod_1.z.string(),
    full_name: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    address: zod_1.z.string().nullish(),
    phone: zod_1.z.string().nullish(),
    profile_img: zod_1.z.string().nullish(),
});
exports.default = exports.crms_m_userSchema;
