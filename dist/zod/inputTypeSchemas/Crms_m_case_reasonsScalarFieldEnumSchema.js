"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_case_reasonsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_case_reasonsScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'category', 'is_active', 'description', 'createdate', 'createdby', 'updatedate', 'updatedby', 'log_inst']);
exports.default = exports.Crms_m_case_reasonsScalarFieldEnumSchema;
