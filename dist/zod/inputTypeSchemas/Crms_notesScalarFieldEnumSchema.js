"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_notesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_notesScalarFieldEnumSchema = zod_1.z.enum(['id', 'title', 'note', 'attachment', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.Crms_notesScalarFieldEnumSchema;
