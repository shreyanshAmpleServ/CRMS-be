"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sales_d_approval_statusSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// SALES D APPROVAL STATUS SCHEMA
/////////////////////////////////////////
exports.sales_d_approval_statusSchema = zod_1.z.object({
    id: zod_1.z.number(),
    entity_type: zod_1.z.string().nullish(),
    entity_id: zod_1.z.number().nullish(),
    approver_user_id: zod_1.z.number().nullish(),
    approval_stage: zod_1.z.number().nullish(),
    approval_status: zod_1.z.string().nullish(),
    remarks: zod_1.z.string().nullish(),
    action_date: zod_1.z.coerce.date().nullish(),
});
exports.default = exports.sales_d_approval_statusSchema;
