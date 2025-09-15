"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_activitiesSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D ACTIVITIES SCHEMA
/////////////////////////////////////////
exports.crms_d_activitiesSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string().nullish(),
    type_id: zod_1.z.number().nullish(),
    status: zod_1.z.string().nullish(),
    due_date: zod_1.z.coerce.date().nullish(),
    due_time: zod_1.z.coerce.date().nullish(),
    priority: zod_1.z.number().nullish(),
    is_reminder: zod_1.z.string().nullish(),
    reminder_time: zod_1.z.string().nullish(),
    reminder_type: zod_1.z.string().nullish(),
    notify_by: zod_1.z.string().nullish(),
    owner_id: zod_1.z.number(),
    description: zod_1.z.string().nullish(),
    deal_id: zod_1.z.number().nullish(),
    contact_id: zod_1.z.number().nullish(),
    company_id: zod_1.z.number().nullish(),
    is_active: zod_1.z.string().nullish(),
    createddate: zod_1.z.coerce.date().nullish(),
    updateddate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number().nullish(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    project_id: zod_1.z.number().nullish(),
});
exports.default = exports.crms_d_activitiesSchema;
