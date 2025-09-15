"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_vendorScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_vendorScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'phone', 'email', 'is_active', 'account_owner', 'website', 'glaccount', 'category', 'email_opt_out', 'billing_street', 'billing_city', 'billing_state', 'billing_zipcode', 'billing_country', 'description', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst', 'profile_img']);
exports.default = exports.Crms_m_vendorScalarFieldEnumSchema;
