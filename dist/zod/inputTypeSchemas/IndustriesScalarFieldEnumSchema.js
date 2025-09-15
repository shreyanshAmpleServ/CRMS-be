"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustriesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.IndustriesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.IndustriesScalarFieldEnumSchema;
