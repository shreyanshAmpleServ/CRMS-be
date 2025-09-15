"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_attachmentsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_attachmentsScalarFieldEnumSchema = zod_1.z.enum(['id', 'related_entity_type', 'related_entity_id', 'filename', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst', 'description', 'file', 'file_type', 'related_entity_name']);
exports.default = exports.Crms_attachmentsScalarFieldEnumSchema;
