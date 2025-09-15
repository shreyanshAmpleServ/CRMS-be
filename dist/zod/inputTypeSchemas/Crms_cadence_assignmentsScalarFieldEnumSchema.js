"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_cadence_assignmentsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_cadence_assignmentsScalarFieldEnumSchema = zod_1.z.enum(['id', 'cadence_id', 'lead_or_customer_id', 'current_step_id', 'next_action_date', 'status']);
exports.default = exports.Crms_cadence_assignmentsScalarFieldEnumSchema;
