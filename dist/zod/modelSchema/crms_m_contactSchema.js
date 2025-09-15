"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_contactSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M CONTACT SCHEMA
/////////////////////////////////////////
exports.crms_m_contactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    jobTitle: zod_1.z.string().nullish(),
    email: zod_1.z.string(),
    emailOptOut: zod_1.z.boolean(),
    phone1: zod_1.z.string(),
    phone2: zod_1.z.string().nullish(),
    fax: zod_1.z.string().nullish(),
    dateOfBirth: zod_1.z.coerce.date().nullish(),
    reviews: zod_1.z.number().nullish(),
    owner: zod_1.z.number().nullish(),
    tags: zod_1.z.string().nullish(),
    source: zod_1.z.number().nullish(),
    industry: zod_1.z.number().nullish(),
    currency: zod_1.z.string(),
    language: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    streetAddress: zod_1.z.string().nullish(),
    city: zod_1.z.string().nullish(),
    state: zod_1.z.number().nullish(),
    country: zod_1.z.number().nullish(),
    zipcode: zod_1.z.string().nullish(),
    socialProfiles: zod_1.z.string().nullish(),
    visibility: zod_1.z.string(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    image: zod_1.z.string().nullish(),
    company_id: zod_1.z.number().nullish(),
    deal_id: zod_1.z.number().nullish(),
});
exports.default = exports.crms_m_contactSchema;
