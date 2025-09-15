"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_d_role_permissionSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS D ROLE PERMISSION SCHEMA
/////////////////////////////////////////
exports.crms_d_role_permissionSchema = zod_1.z.object({
    id: zod_1.z.number(),
    role_id: zod_1.z.number(),
    permission_id: zod_1.z.number(),
    module_id: zod_1.z.number(),
    is_active: zod_1.z.string(),
    log_inst: zod_1.z.number(),
    createdate: zod_1.z.coerce.date(),
    updatedate: zod_1.z.coerce.date().nullish(),
    createdby: zod_1.z.number(),
    updatedby: zod_1.z.number().nullish(),
});
exports.default = exports.crms_d_role_permissionSchema;
