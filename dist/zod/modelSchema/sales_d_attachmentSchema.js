"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sales_d_attachmentSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// SALES D ATTACHMENT SCHEMA
/////////////////////////////////////////
exports.sales_d_attachmentSchema = zod_1.z.object({
    id: zod_1.z.number(),
    entity_type: zod_1.z.string().nullish(),
    entity_id: zod_1.z.number().nullish(),
    file_name: zod_1.z.string().nullish(),
    file_path: zod_1.z.string().nullish(),
    uploaded_by: zod_1.z.number().nullish(),
    uploaded_on: zod_1.z.coerce.date().nullish(),
});
exports.default = exports.sales_d_attachmentSchema;
