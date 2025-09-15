"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_cadence_stepsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_cadence_stepsScalarFieldEnumSchema = zod_1.z.enum(['id', 'cadence_id', 'step_order', 'action_type', 'template_id', 'description', 'wait_days']);
exports.default = exports.Crms_cadence_stepsScalarFieldEnumSchema;
