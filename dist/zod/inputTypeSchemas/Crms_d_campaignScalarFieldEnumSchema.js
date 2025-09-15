"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_campaignScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_campaignScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'status', 'exp_revenue', 'camp_cost', 'start_date', 'end_date', 'description', 'is_active', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy', 'logInst', 'type', 'owner_id']);
exports.default = exports.Crms_d_campaignScalarFieldEnumSchema;
