"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_audit_logsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS AUDIT LOGS SCHEMA
/////////////////////////////////////////
exports.crms_audit_logsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    table_name: zod_1.z.string().nullish(),
    record_id: zod_1.z.number().nullish(),
    field_name: zod_1.z.string().nullish(),
    old_value: zod_1.z.string().nullish(),
    new_value: zod_1.z.string().nullish(),
    obj_name: zod_1.z.string().nullish(),
    obj_id: zod_1.z.number().nullish(),
    action: zod_1.z.string().nullish(),
    updated_by: zod_1.z.number().nullish(),
    updated_by_name: zod_1.z.string().nullish(),
    updated_at: zod_1.z.coerce.date().nullish(),
});
exports.default = exports.crms_audit_logsSchema;
