"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_commentsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_commentsScalarFieldEnumSchema = zod_1.z.enum(['id', 'parent_id', 'comments', 'user_name', 'user_id', 'obj_name', 'obj_id', 'created_at']);
exports.default = exports.Crms_commentsScalarFieldEnumSchema;
