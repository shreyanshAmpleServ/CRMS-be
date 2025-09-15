"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CountryScalarFieldEnumSchema = zod_1.z.enum(['id', 'code', 'name', 'is_active', 'createdate', 'createdby', 'log_inst', 'updatedate', 'updatedby']);
exports.default = exports.CountryScalarFieldEnumSchema;
