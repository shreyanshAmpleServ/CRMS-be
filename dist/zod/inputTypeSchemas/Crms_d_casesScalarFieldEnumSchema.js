"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_casesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_casesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'is_active', 'case_number', 'product_id', 'case_status', 'case_type', 'case_priority', 'case_origin', 'case_reason', 'contact_id', 'subject', 'account_id', 'deal_id', 'reported_by', 'email', 'phone', 'description', 'createdate', 'createdby', 'updatedate', 'updatedby', 'log_inst', 'case_owner_id']);
exports.default = exports.Crms_d_casesScalarFieldEnumSchema;
