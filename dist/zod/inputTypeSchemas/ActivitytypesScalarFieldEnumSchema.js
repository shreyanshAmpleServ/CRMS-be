"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitytypesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ActivitytypesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'is_active', 'icon', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.ActivitytypesScalarFieldEnumSchema;
