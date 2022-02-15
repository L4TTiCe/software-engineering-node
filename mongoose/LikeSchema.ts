import mongoose from "mongoose"
import {Like} from "../models/Like"

export const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type: mongoose.Schema.Types.ObjectId, ref: "TuitModel"},
    likedBy: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "likes"})
