"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealContactsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.DealContactsScalarFieldEnumSchema = zod_1.z.enum(['id', 'dealId', 'contactId', 'roleInDeal', 'createdDate']);
exports.default = exports.DealContactsScalarFieldEnumSchema;
