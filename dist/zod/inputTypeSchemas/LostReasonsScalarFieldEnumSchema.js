"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostReasonsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.LostReasonsScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst', 'colorCode', 'order']);
exports.default = exports.LostReasonsScalarFieldEnumSchema;
