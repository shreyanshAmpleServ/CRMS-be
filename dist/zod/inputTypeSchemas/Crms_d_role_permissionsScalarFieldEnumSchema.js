"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_role_permissionsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_role_permissionsScalarFieldEnumSchema = zod_1.z.enum(['id', 'role_id', 'permissions', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby']);
exports.default = exports.Crms_d_role_permissionsScalarFieldEnumSchema;
