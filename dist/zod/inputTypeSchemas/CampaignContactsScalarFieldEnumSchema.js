"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignContactsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CampaignContactsScalarFieldEnumSchema = zod_1.z.enum(['id', 'camp_id', 'contact_id', 'createdDate']);
exports.default = exports.CampaignContactsScalarFieldEnumSchema;
