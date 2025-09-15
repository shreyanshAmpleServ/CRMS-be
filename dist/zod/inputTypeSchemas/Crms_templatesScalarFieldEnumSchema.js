"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_templatesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_templatesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'type', 'content', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy', 'logInst']);
exports.default = exports.Crms_templatesScalarFieldEnumSchema;
