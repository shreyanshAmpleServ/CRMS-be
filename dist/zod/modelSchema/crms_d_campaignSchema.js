"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_campaignSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D CAMPAIGN SCHEMA
/////////////////////////////////////////
exports.crms_d_campaignSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    status: zod_1.z.string().nullish(),
    exp_revenue: zod_1.z.number().nullish(),
    camp_cost: zod_1.z.number().nullish(),
    start_date: zod_1.z.coerce.date(),
    end_date: zod_1.z.coerce.date(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdDate: zod_1.z.coerce.date(),
    updatedDate: zod_1.z.coerce.date().nullish(),
    createdBy: zod_1.z.number(),
    updatedBy: zod_1.z.number().nullish(),
    logInst: zod_1.z.number().nullish(),
    type: zod_1.z.string().nullish(),
    owner_id: zod_1.z.number(),
});
exports.default = exports.crms_d_campaignSchema;
