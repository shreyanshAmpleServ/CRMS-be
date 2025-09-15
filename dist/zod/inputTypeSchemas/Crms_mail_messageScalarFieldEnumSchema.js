"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms_mail_messageScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Crms_mail_messageScalarFieldEnumSchema = zod_1.z.enum(['id', 'thread_id', 'model', 'record_id', 'subject', 'body', 'type', 'sender_id', 'recipient', 'timestamp', 'is_incoming', 'is_read', 'message_id', 'reply_to_id']);
exports.default = exports.Crms_mail_messageScalarFieldEnumSchema;
