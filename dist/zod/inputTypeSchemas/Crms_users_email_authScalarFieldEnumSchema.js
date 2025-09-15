"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_users_email_authScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_users_email_authScalarFieldEnumSchema = zod_1.z.enum(['id', 'user_id', 'email_id', 'access_token', 'refresh_token', 'email_provider', 'expire_datetime', 'other_info']);
exports.default = exports.Crms_users_email_authScalarFieldEnumSchema;
