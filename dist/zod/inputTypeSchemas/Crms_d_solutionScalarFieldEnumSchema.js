"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_d_solutionScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_d_solutionScalarFieldEnumSchema = zod_1.z.enum(['id', 'title', 'is_active', 'solution_owner', 'product_id', 'status', 'question', 'answer', 'createdate', 'createdby', 'updatedate', 'updatedby', 'log_inst']);
exports.default = exports.Crms_d_solutionScalarFieldEnumSchema;
