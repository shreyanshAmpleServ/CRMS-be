"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealHistorySchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// DEAL HISTORY SCHEMA
/////////////////////////////////////////
exports.DealHistorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    dealId: zod_1.z.number(),
    oldStage: zod_1.z.string(),
    newStage: zod_1.z.string(),
    changedAt: zod_1.z.coerce.date(),
});
exports.default = exports.DealHistorySchema;
