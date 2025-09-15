"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_user_roleScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_user_roleScalarFieldEnumSchema = zod_1.z.enum(['id', 'user_id', 'role_id', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby']);
exports.default = exports.Crms_d_user_roleScalarFieldEnumSchema;
