"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_users_email_authSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS USERS EMAIL AUTH SCHEMA
/////////////////////////////////////////
exports.crms_users_email_authSchema = zod_1.z.object({
    id: zod_1.z.number(),
    user_id: zod_1.z.number().nullish(),
    email_id: zod_1.z.string().nullish(),
    access_token: zod_1.z.string().nullish(),
    refresh_token: zod_1.z.string().nullish(),
    email_provider: zod_1.z.string().nullish(),
    expire_datetime: zod_1.z.coerce.date().nullish(),
    other_info: zod_1.z.string().nullish(),
});
exports.default = exports.crms_users_email_authSchema;
