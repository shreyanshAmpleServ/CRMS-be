"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_cadence_assignmentsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS CADENCE ASSIGNMENTS SCHEMA
/////////////////////////////////////////
exports.crms_cadence_assignmentsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    cadence_id: zod_1.z.number(),
    lead_or_customer_id: zod_1.z.number(),
    current_step_id: zod_1.z.number().nullish(),
    next_action_date: zod_1.z.coerce.date().nullish(),
    status: zod_1.z.string(),
});
exports.default = exports.crms_cadence_assignmentsSchema;
