"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_cadence_stepsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS CADENCE STEPS SCHEMA
/////////////////////////////////////////
exports.crms_cadence_stepsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    cadence_id: zod_1.z.number(),
    step_order: zod_1.z.number(),
    action_type: zod_1.z.string(),
    template_id: zod_1.z.number().nullish(),
    description: zod_1.z.string().nullish(),
    wait_days: zod_1.z.number(),
});
exports.default = exports.crms_cadence_stepsSchema;
