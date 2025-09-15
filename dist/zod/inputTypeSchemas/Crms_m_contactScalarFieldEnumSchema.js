"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_m_contactScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_m_contactScalarFieldEnumSchema = zod_1.z.enum(['id', 'firstName', 'lastName', 'jobTitle', 'email', 'emailOptOut', 'phone1', 'phone2', 'fax', 'dateOfBirth', 'reviews', 'owner', 'tags', 'source', 'industry', 'currency', 'language', 'description', 'streetAddress', 'city', 'state', 'country', 'zipcode', 'socialProfiles', 'visibility', 'is_active', 'log_inst', 'createdate', 'updatedate', 'createdby', 'updatedby', 'image', 'company_id', 'deal_id']);
exports.default = exports.Crms_m_contactScalarFieldEnumSchema;
