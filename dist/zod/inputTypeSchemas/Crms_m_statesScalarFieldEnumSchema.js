"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_statesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_statesScalarFieldEnumSchema = zod_1.z.enum(['country_code', 'is_active', 'createdate', 'createdby', 'log_inst', 'updatedate', 'updatedby', 'id', 'name']);
exports.default = exports.Crms_m_statesScalarFieldEnumSchema;
