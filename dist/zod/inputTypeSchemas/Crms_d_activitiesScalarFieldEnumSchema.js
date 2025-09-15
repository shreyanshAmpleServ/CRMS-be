"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_activitiesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_activitiesScalarFieldEnumSchema = zod_1.z.enum(['id', 'title', 'type_id', 'status', 'due_date', 'due_time', 'priority', 'is_reminder', 'reminder_time', 'reminder_type', 'notify_by', 'owner_id', 'description', 'deal_id', 'contact_id', 'company_id', 'is_active', 'createddate', 'updateddate', 'createdby', 'updatedby', 'log_inst', 'project_id']);
exports.default = exports.Crms_d_activitiesScalarFieldEnumSchema;
