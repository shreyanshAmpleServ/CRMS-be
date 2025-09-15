"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_callsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_callsScalarFieldEnumSchema = zod_1.z.enum(['id', 'call_for', 'assigned_to', 'related_to', 'related_to_id', 'call_purpose_id', 'call_status_id', 'call_type_id', 'call_start_date', 'call_start_time', 'duration_minutes', 'call_subject', 'call_reminder', 'call_notes', 'follow_up_needed', 'follow_up_date', 'call_for_contact_id', 'call_for_lead_id', 'call_for_project_id', 'reminder_type', 'createdate', 'updatedate', 'createdby', 'updatedby', 'log_inst', 'ongoing_callStatus']);
exports.default = exports.Crms_callsScalarFieldEnumSchema;
