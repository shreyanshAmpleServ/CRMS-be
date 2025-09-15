"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_menusSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS MENUS SCHEMA
/////////////////////////////////////////
exports.crms_menusSchema = zod_1.z.object({
    id: zod_1.z.number(),
    menu_label: zod_1.z.string().nullish(),
    routes: zod_1.z.string().nullish(),
    icon: zod_1.z.string().nullish(),
    parent_menu_id: zod_1.z.number().nullish(),
    is_active: zod_1.z.string(),
    order_by: zod_1.z.number().nullish(),
});
exports.default = exports.crms_menusSchema;
