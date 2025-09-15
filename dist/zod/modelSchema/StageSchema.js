"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// STAGE SCHEMA
/////////////////////////////////////////
exports.StageSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    order: zod_1.z.number(),
    pipelineId: zod_1.z.number(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdDate: zod_1.z.coerce.date(),
    updatedDate: zod_1.z.coerce.date().nullish(),
    createdBy: zod_1.z.number(),
    updatedBy: zod_1.z.number().nullish(),
    colorCode: zod_1.z.string().nullish(),
});
exports.default = exports.StageSchema;
