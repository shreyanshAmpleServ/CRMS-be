"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_cadencesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_cadencesScalarFieldEnumSchema = zod_1.z.enum(['id', 'name', 'description', 'is_active', 'createdDate', 'updatedDate', 'createdBy', 'updatedBy', 'logInst']);
exports.default = exports.Crms_cadencesScalarFieldEnumSchema;
