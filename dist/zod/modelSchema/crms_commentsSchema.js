"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_commentsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS COMMENTS SCHEMA
/////////////////////////////////////////
exports.crms_commentsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.number().nullish(),
    comments: zod_1.z.string().nullish(),
    user_name: zod_1.z.string().nullish(),
    user_id: zod_1.z.number().nullish(),
    obj_name: zod_1.z.string().nullish(),
    obj_id: zod_1.z.number().nullish(),
    created_at: zod_1.z.coerce.date().nullish(),
});
exports.default = exports.crms_commentsSchema;
