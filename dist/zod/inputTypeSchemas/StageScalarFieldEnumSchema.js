"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.StageScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'order', 'pipelineId', 'is_active', 'log_inst', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy', 'colorCode']);
exports.default = exports.StageScalarFieldEnumSchema;
