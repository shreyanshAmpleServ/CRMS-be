"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_template_categorySchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS TEMPLATE CATEGORY SCHEMA
/////////////////////////////////////////
exports.crms_template_categorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    template_master_id: zod_1.z.number().nullish(),
    category_name: zod_1.z.string().nullish(),
    type: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
});
exports.default = exports.crms_template_categorySchema;
