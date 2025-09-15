"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ProjectScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'projectTiming', 'amount', 'startDate', 'dueDate', 'description', 'is_active', 'log_inst', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy']);
exports.default = exports.ProjectScalarFieldEnumSchema;
