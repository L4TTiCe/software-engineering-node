import mongoose from "mongoose"
import {Bookmark} from "../../models/Bookmark"

export const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedTuit: {type: mongoose.Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmarks"})
