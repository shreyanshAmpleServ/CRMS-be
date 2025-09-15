"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.DealScalarFieldEnumSchema = zod_1.z.enum(['id', 'dealName', 'status', 'dealValue', 'currency', 'period', 'periodValue', 'dueDate', 'expectedCloseDate', 'followUpDate', 'assigneeId', 'source', 'priority', 'tags', 'description', 'is_active', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy', 'logInst', 'pipelineId', 'stageId']);
exports.default = exports.DealScalarFieldEnumSchema;
