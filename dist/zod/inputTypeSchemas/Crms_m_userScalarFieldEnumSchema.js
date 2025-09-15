"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_userScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_userScalarFieldEnumSchema = zod_1.z.enum(['id', 'username', 'password', 'email', 'full_name', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby', 'address', 'phone', 'profile_img']);
exports.default = exports.Crms_m_userScalarFieldEnumSchema;
