/**
 * @file Implements mongoose model to CRUD
 * documents in the messages collection
 */
import mongoose from "mongoose"
import {MessageSchema} from "./MessageSchema"

export const MessageModel = mongoose.model("MessageModel", MessageSchema)
