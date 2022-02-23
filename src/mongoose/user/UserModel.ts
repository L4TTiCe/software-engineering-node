/**
 * @file Implements mongoose model to CRUD
 * documents in the users collection
 */
import mongoose from "mongoose"
import {UserSchema} from "./UserSchema"

/**
 * The UserModel is used for creating and reading documents of the {@link User} type defined by the
 * {@link UserSchema} from the underlying MongoDB database.
 * @typedef {UserModel} UserModel
 */
export const UserModel = mongoose.model("UserModel", UserSchema)
