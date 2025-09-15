"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_leadsSchema = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
/////////////////////////////////////////
// CRMS LEADS SCHEMA
/////////////////////////////////////////
exports.crms_leadsSchema = zod_1.z.object({
    id: zod_1.z.number(),
    lead_owner: zod_1.z.number(),
    first_name: zod_1.z.string().nullish(),
    last_name: zod_1.z.string().nullish(),
    title: zod_1.z.string().nullish(),
    email: zod_1.z.string().nullish(),
    phone: zod_1.z.string().nullish(),
    fax: zod_1.z.string().nullish(),
    mobile: zod_1.z.string().nullish(),
    website: zod_1.z.string().nullish(),
    lead_source: zod_1.z.number().nullish(),
    lead_status: zod_1.z.number().nullish(),
    industry: zod_1.z.number().nullish(),
    no_of_employees: zod_1.z.number().nullish(),
    annual_revenue: zod_1.z.instanceof(client_1.Prisma.Decimal, { message: "Field 'annual_revenue' must be a Decimal. Location: ['Models', 'crms_leads']" }).nullish(),
    revenue_currency: zod_1.z.string().nullish(),
    rating: zod_1.z.string().nullish(),
    tags: zod_1.z.string().nullish(),
    email_opt_out: zod_1.z.string(),
    secondary_email: zod_1.z.string().nullish(),
    facebook_ac: zod_1.z.string().nullish(),
    skype_id: zod_1.z.string().nullish(),
    twitter_ac: zod_1.z.string().nullish(),
    linked_in_ac: zod_1.z.string().nullish(),
    whatsapp_ac: zod_1.z.string().nullish(),
    instagram_ac: zod_1.z.string().nullish(),
    street: zod_1.z.string().nullish(),
    city: zod_1.z.string().nullish(),
    state: zod_1.z.number().nullish(),
    zipcode: zod_1.z.string().nullish(),
    country: zod_1.z.number().nullish(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
    log_inst: zod_1.z.number().nullish(),
    company_icon: zod_1.z.string().nullish(),
    company_id: zod_1.z.number(),
    jobTitle: zod_1.z.string().nullish(),
});
exports.default = exports.crms_leadsSchema;
