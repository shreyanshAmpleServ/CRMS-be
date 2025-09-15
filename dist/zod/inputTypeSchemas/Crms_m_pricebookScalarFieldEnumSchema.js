"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_pricebookScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_pricebookScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'model', 'is_active', 'description', 'effectivate_from', 'effectivate_to', 'createdate', 'createdby', 'updatedate', 'updatedby', 'log_inst']);
exports.default = exports.Crms_m_pricebookScalarFieldEnumSchema;
