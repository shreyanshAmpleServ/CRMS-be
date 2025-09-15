"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// DEAL SCHEMA
/////////////////////////////////////////
exports.DealSchema = zod_1.z.object({
    id: zod_1.z.number(),
    dealName: zod_1.z.string(),
    status: zod_1.z.string().nullish(),
    dealValue: zod_1.z.number().nullish(),
    currency: zod_1.z.string().nullish(),
    period: zod_1.z.string().nullish(),
    periodValue: zod_1.z.number().nullish(),
    dueDate: zod_1.z.coerce.date(),
    expectedCloseDate: zod_1.z.coerce.date(),
    followUpDate: zod_1.z.coerce.date().nullish(),
    assigneeId: zod_1.z.number().nullish(),
    source: zod_1.z.string().nullish(),
    priority: zod_1.z.string(),
    tags: zod_1.z.string().nullish(),
    description: zod_1.z.string(),
    is_active: zod_1.z.string(),
    createdDate: zod_1.z.coerce.date(),
    updatedDate: zod_1.z.coerce.date().nullish(),
    createdBy: zod_1.z.number(),
    updatedBy: zod_1.z.number().nullish(),
    logInst: zod_1.z.number().nullish(),
    pipelineId: zod_1.z.number().nullish(),
    stageId: zod_1.z.number().nullish(),
});
exports.default = exports.DealSchema;
