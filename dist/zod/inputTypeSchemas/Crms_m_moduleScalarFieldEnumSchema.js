"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_moduleScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_moduleScalarFieldEnumSchema = zod_1.z.enum(['id', 'module_name', 'description', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby', 'module_path']);
exports.default = exports.Crms_m_moduleScalarFieldEnumSchema;
