"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignContactsSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CAMPAIGN CONTACTS SCHEMA
/////////////////////////////////////////
exports.CampaignContactsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    camp_id: zod_1.z.number(),
    contact_id: zod_1.z.number(),
    createdDate: zod_1.z.coerce.date(),
});
exports.default = exports.CampaignContactsSchema;
