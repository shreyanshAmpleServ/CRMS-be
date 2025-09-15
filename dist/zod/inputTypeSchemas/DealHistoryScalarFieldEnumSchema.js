"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealHistoryScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.DealHistoryScalarFieldEnumSchema = zod_1.z.enum(['id', 'dealId', 'oldStage', 'newStage', 'changedAt']);
exports.default = exports.DealHistoryScalarFieldEnumSchema;
