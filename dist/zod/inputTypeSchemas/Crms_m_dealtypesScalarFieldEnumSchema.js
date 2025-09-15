"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_dealtypesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_dealtypesScalarFieldEnumSchema = zod_1.z.enum(['id', 'typename', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.Crms_m_dealtypesScalarFieldEnumSchema;
