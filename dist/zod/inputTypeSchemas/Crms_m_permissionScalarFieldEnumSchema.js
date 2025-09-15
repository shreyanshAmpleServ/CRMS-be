"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_permissionScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_permissionScalarFieldEnumSchema = zod_1.z.enum(['id', 'permission_name', 'description', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby']);
exports.default = exports.Crms_m_permissionScalarFieldEnumSchema;
