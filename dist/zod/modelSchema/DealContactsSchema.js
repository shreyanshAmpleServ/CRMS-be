"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealContactsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// DEAL CONTACTS SCHEMA
/////////////////////////////////////////
exports.DealContactsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    dealId: zod_1.z.number(),
    contactId: zod_1.z.number(),
    roleInDeal: zod_1.z.string().nullish(),
    createdDate: zod_1.z.coerce.date(),
});
exports.default = exports.DealContactsSchema;
