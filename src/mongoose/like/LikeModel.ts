/**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
import mongoose from "mongoose"
import {LikeSchema} from "./LikeSchema"

export const LikeModel = mongoose.model("LikeModel", LikeSchema)
