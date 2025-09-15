"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_callsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS CALLS SCHEMA
/////////////////////////////////////////
exports.crms_callsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    call_for: zod_1.z.string(),
    assigned_to: zod_1.z.number().nullish(),
    related_to: zod_1.z.string(),
    related_to_id: zod_1.z.number().nullish(),
    call_purpose_id: zod_1.z.number(),
    call_status_id: zod_1.z.number().nullish(),
    call_type_id: zod_1.z.number().nullish(),
    call_start_date: zod_1.z.coerce.date(),
    call_start_time: zod_1.z.coerce.date(),
    duration_minutes: zod_1.z.number().nullish(),
    call_subject: zod_1.z.string(),
    call_reminder: zod_1.z.number().nullish(),
    call_notes: zod_1.z.string().nullish(),
    follow_up_needed: zod_1.z.string().nullish(),
    follow_up_date: zod_1.z.coerce.date().nullish(),
    call_for_contact_id: zod_1.z.number().nullish(),
    call_for_lead_id: zod_1.z.number().nullish(),
    call_for_project_id: zod_1.z.number().nullish(),
    reminder_type: zod_1.z.string().nullish(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    ongoing_callStatus: zod_1.z.string(),
});
exports.default = exports.crms_callsSchema;
