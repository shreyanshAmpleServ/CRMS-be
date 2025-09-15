"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_user_roleSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D USER ROLE SCHEMA
/////////////////////////////////////////
exports.crms_d_user_roleSchema = zod_1.z.object({
    id: zod_1.z.number(),
    user_id: zod_1.z.number(),
    role_id: zod_1.z.number(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
});
exports.default = exports.crms_d_user_roleSchema;
