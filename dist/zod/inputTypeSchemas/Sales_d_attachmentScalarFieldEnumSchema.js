"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_d_attachmentScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Sales_d_attachmentScalarFieldEnumSchema = zod_1.z.enum(['id', 'entity_type', 'entity_id', 'file_name', 'file_path', 'uploaded_by', 'uploaded_on']);
exports.default = exports.Sales_d_attachmentScalarFieldEnumSchema;
