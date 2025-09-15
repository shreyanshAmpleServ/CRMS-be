"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CompanyScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'registrationNumber', 'email', 'phone', 'website', 'logo', 'address', 'industryType', 'annualRevenue', 'employeeCount', 'businessType', 'primaryContactName', 'primaryContactRole', 'primaryContactEmail', 'primaryContactPhone', 'secondaryContactName', 'secondaryContactRole', 'secondaryContactEmail', 'secondaryContactPhone', 'log_inst', 'is_active', 'createdDate', 'updatedDate', 'createdBy']);
exports.default = exports.CompanyScalarFieldEnumSchema;
