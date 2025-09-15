"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////
exports.CompanySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    registrationNumber: zod_1.z.string().nullish(),
    email: zod_1.z.string(),
    phone: zod_1.z.string(),
    website: zod_1.z.string().nullish(),
    logo: zod_1.z.string().nullish(),
    address: zod_1.z.string().nullish(),
    industryType: zod_1.z.string(),
    annualRevenue: zod_1.z.number().nullish(),
    employeeCount: zod_1.z.number().nullish(),
    businessType: zod_1.z.string(),
    primaryContactName: zod_1.z.string(),
    primaryContactRole: zod_1.z.string(),
    primaryContactEmail: zod_1.z.string(),
    primaryContactPhone: zod_1.z.string(),
    secondaryContactName: zod_1.z.string().nullish(),
    secondaryContactRole: zod_1.z.string().nullish(),
    secondaryContactEmail: zod_1.z.string().nullish(),
    secondaryContactPhone: zod_1.z.string().nullish(),
    log_inst: zod_1.z.number(),
    is_active: zod_1.z.string(),
    createdDate: zod_1.z.coerce.date(),
    updatedDate: zod_1.z.coerce.date().nullish(),
    createdBy: zod_1.z.number(),
});
exports.default = exports.CompanySchema;
