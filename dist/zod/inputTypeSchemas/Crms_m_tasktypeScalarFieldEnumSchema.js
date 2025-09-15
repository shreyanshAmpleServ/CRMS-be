"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_tasktypeScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_tasktypeScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.Crms_m_tasktypeScalarFieldEnumSchema;
