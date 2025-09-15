"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_productsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_productsScalarFieldEnumSchema = zod_1.z.enum(['id', 'code', 'name', 'description', 'is_active', 'vendor_id', 'manufacturer_id', 'tax_id', 'unit_price', 'currency', 'onhand', 'ordered', 'commited', 'reorder_level', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst', 'product_image', 'category']);
exports.default = exports.Crms_m_productsScalarFieldEnumSchema;
