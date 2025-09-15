"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_attachmentsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS ATTACHMENTS SCHEMA
/////////////////////////////////////////
exports.crms_attachmentsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    related_entity_type: zod_1.z.string().nullish(),
    related_entity_id: zod_1.z.number().nullish(),
    filename: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    description: zod_1.z.string().nullish(),
    file: zod_1.z.string().nullish(),
    file_type: zod_1.z.string().nullish(),
    related_entity_name: zod_1.z.string().nullish(),
});
exports.default = exports.crms_attachmentsSchema;
