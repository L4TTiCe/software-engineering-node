/**
 * @file Implements mongoose schema for Messages
 */
import mongoose from "mongoose";
import {Message} from "../../models/Message";

/**
 * Represents a Message from a {@link User} to another User. The MessageSchema
 * represents how a {@link Message} is represented in the database.
 * @typedef {MessageSchema} MessageSchema
 * @property {string} message - The message sent
 * @property {Date} sentOn - When the message was sent
 * @property {User} to - The User who sent the message
 * @property {User} from - the User to whom the message was sent
 */
export const MessageSchema = new mongoose.Schema<Message>({
    message: {type: "string"},
    sentOn: {type: Date, default: Date.now},
    to: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "messages"})

