"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_menusScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_menusScalarFieldEnumSchema = zod_1.z.enum(['id', 'menu_label', 'routes', 'icon', 'parent_menu_id', 'is_active', 'order_by']);
exports.default = exports.Crms_menusScalarFieldEnumSchema;
