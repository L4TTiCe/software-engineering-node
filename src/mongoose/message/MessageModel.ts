/**
 * @file Implements mongoose model to CRUD
 * documents in the messages collection
 */
import mongoose from "mongoose"
import {MessageSchema} from "./MessageSchema"

/**
 * The MessageModel is used for creating and reading documents of the {@link Message} type defined by the
 * {@link MessageSchema} from the underlying MongoDB database.
 * @typedef {MessageModel} MessageModel
 */
export const MessageModel = mongoose.model("MessageModel", MessageSchema)
