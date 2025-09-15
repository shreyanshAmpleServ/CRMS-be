"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.PipelineScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'is_active', 'log_inst', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy']);
exports.default = exports.PipelineScalarFieldEnumSchema;
