"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_d_approval_statusScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Sales_d_approval_statusScalarFieldEnumSchema = zod_1.z.enum(['id', 'entity_type', 'entity_id', 'approver_user_id', 'approval_stage', 'approval_status', 'remarks', 'action_date']);
exports.default = exports.Sales_d_approval_statusScalarFieldEnumSchema;
