"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_template_categoryScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_template_categoryScalarFieldEnumSchema = zod_1.z.enum(['id', 'template_master_id', 'category_name', 'type', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.Crms_template_categoryScalarFieldEnumSchema;
