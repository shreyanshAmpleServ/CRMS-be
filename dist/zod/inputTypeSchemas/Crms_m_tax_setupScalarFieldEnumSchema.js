"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_tax_setupScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_tax_setupScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'rate', 'effect_date', 'category', 'account_id', 'account_name', 'is_active', 'createdate', 'createdby', 'updatedate', 'updatedby', 'log_inst', 'external_code', 'validFrom', 'validTo']);
exports.default = exports.Crms_m_tax_setupScalarFieldEnumSchema;
