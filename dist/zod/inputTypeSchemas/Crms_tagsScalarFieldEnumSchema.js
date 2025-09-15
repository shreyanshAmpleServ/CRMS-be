"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_tagsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_tagsScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'tagtype', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.Crms_tagsScalarFieldEnumSchema;
