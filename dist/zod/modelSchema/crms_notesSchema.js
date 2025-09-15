"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_notesSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS NOTES SCHEMA
/////////////////////////////////////////
exports.crms_notesSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    note: zod_1.z.string().nullish(),
    attachment: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.crms_notesSchema;
