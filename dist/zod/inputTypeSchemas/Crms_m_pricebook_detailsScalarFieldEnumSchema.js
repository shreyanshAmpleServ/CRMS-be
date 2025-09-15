"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_pricebook_detailsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_pricebook_detailsScalarFieldEnumSchema = zod_1.z.enum(['id', 'parent_id', 'from_price', 'to_price', 'discount_per']);
exports.default = exports.Crms_m_pricebook_detailsScalarFieldEnumSchema;
