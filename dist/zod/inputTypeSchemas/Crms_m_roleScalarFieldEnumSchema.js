"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_roleScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_roleScalarFieldEnumSchema = zod_1.z.enum(['id', 'role_name', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby']);
exports.default = exports.Crms_m_roleScalarFieldEnumSchema;
