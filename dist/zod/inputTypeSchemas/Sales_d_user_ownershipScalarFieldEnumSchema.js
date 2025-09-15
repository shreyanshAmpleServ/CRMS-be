"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sales_d_user_ownershipScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Sales_d_user_ownershipScalarFieldEnumSchema = zod_1.z.enum(['id', 'entity_type', 'entity_id', 'owner_user_id', 'shared_with_user_id', 'role_type', 'assigned_on']);
exports.default = exports.Sales_d_user_ownershipScalarFieldEnumSchema;
