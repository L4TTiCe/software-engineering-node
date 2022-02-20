/**
 * @file Implements mongoose model to CRUD
 * documents in the users collection
 */
import mongoose from "mongoose"
import {UserSchema} from "./UserSchema"

export const UserModel = mongoose.model("UserModel", UserSchema)
