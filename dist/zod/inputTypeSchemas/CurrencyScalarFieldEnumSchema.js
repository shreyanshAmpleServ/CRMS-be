"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CurrencyScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'code', 'icon', 'is_default', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.CurrencyScalarFieldEnumSchema;
