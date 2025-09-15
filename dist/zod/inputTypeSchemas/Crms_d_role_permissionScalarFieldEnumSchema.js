"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_role_permissionScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_role_permissionScalarFieldEnumSchema = zod_1.z.enum(['id', 'role_id', 'permission_id', 'module_id', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby']);
exports.default = exports.Crms_d_role_permissionScalarFieldEnumSchema;
