/**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
import mongoose from "mongoose"
import {LikeSchema} from "./LikeSchema"

/**
 * The LikeModel is used for creating and reading documents of the {@link Like} type defined by the
 * {@link LikeSchema} from the underlying MongoDB database.
 * @typedef {LikeModel} LikeModel
 */
export const LikeModel = mongoose.model("LikeModel", LikeSchema)
