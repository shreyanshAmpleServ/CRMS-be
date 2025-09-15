"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallStatusesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CallStatusesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.CallStatusesScalarFieldEnumSchema;
