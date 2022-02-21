/**
 * @file Implements mongoose schema for Follow
 */
import mongoose from "mongoose"
import {Follow} from "../../models/Follow"

/**
 * Represents the follow relationship between a user and another user,
 * as in a {@link User} follows a user. The FollowSchema represents how a
 * Follow is represented in the database.
 * @typedef {FollowSchema} FollowSchema
 * @property {User} userFollowed - User being followed
 * @property {User} userFollowing - User following the user
 */
export const FollowSchema = new mongoose.Schema<Follow>({
    userFollowed: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follows"})
