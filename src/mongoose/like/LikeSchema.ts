/**
 * @file Implements mongoose schema for Likes
 */
import mongoose from "mongoose"
import {Like} from "../../models/Like"

/**
 * Represents likes relationship between a {@link User} and a {@link Tuit}, as in a user likes a tuit.
 * The TuitSchema represents how a Like is represented in the database.
 * @typedef {LikeSchema} LikeSchema
 * @property {Tuit} tuit - Tuit being liked
 * @property {User} likedBy - User liking the tuit
 */
export const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: mongoose.Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"})
