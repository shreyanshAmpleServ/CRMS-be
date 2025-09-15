"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactStagesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ContactStagesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'displayorder', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.ContactStagesScalarFieldEnumSchema;
