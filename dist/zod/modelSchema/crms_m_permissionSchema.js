"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_m_permissionSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS M PERMISSION SCHEMA
/////////////////////////////////////////
exports.crms_m_permissionSchema = zod_1.z.object({
    id: zod_1.z.number(),
    permission_name: zod_1.z.string(),
    description: zod_1.z.string().nullish(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
});
exports.default = exports.crms_m_permissionSchema;
