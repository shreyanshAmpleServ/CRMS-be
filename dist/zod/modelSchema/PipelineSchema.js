"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// PIPELINE SCHEMA
/////////////////////////////////////////
exports.PipelineSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdDate: zod_1.z.coerce.date(),
    updatedDate: zod_1.z.coerce.date().nullish(),
    createdBy: zod_1.z.number(),
    updatedBy: zod_1.z.number().nullish(),
});
exports.default = exports.PipelineSchema;
