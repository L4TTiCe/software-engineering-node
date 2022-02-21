/**
 * @file Implements mongoose model to CRUD
 * documents in the follows collection
 */
import mongoose from "mongoose"
import {FollowSchema} from "./FollowSchema"

/**
 * The FollowModel is used for creating and reading documents of the {@link Follow} type defined by the
 * {@link FollowSchema} from the underlying MongoDB database.
 * @typedef {FollowModel} FollowModel
 */
export const FollowModel = mongoose.model("FollowModel", FollowSchema)
