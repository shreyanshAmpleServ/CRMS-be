"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_audit_logsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_audit_logsScalarFieldEnumSchema = zod_1.z.enum(['id', 'table_name', 'record_id', 'field_name', 'old_value', 'new_value', 'obj_name', 'obj_id', 'action', 'updated_by', 'updated_by_name', 'updated_at']);
exports.default = exports.Crms_audit_logsScalarFieldEnumSchema;
