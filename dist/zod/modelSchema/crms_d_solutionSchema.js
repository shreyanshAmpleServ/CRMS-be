"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_solutionSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D SOLUTION SCHEMA
/////////////////////////////////////////
exports.crms_d_solutionSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    is_active: zod_1.z.string(),
    solution_owner: zod_1.z.number().nullish(),
    product_id: zod_1.z.number().nullish(),
    status: zod_1.z.string(),
    question: zod_1.z.string(),
    answer: zod_1.z.string().nullish(),
    createdate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedate: zod_1.z.coerce.date().nullish(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.crms_d_solutionSchema;
