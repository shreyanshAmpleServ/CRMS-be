"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_template_itemsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_template_itemsScalarFieldEnumSchema = zod_1.z.enum(['id', 'parent_id', 'item_id', 'description', 'qty', 'is_active', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst']);
exports.default = exports.Crms_template_itemsScalarFieldEnumSchema;
