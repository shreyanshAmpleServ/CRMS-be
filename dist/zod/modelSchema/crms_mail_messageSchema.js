"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crms_mail_messageSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// CRMS MAIL MESSAGE SCHEMA
/////////////////////////////////////////
exports.crms_mail_messageSchema = zod_1.z.object({
    id: zod_1.z.number(),
    thread_id: zod_1.z.string().nullish(),
    model: zod_1.z.string(),
    record_id: zod_1.z.number(),
    subject: zod_1.z.string().nullish(),
    body: zod_1.z.string().nullish(),
    type: zod_1.z.string(),
    sender_id: zod_1.z.number().nullish(),
    recipient: zod_1.z.string().nullish(),
    timestamp: zod_1.z.coerce.date().nullish(),
    is_incoming: zod_1.z.boolean().nullish(),
    is_read: zod_1.z.boolean().nullish(),
    message_id: zod_1.z.string().nullish(),
    reply_to_id: zod_1.z.number().nullish(),
});
exports.default = exports.crms_mail_messageSchema;
