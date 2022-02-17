import mongoose from "mongoose"
import {Follow} from "../../models/Follow"

export const FollowSchema = new mongoose.Schema<Follow>({
    userFollowed: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follows"})
