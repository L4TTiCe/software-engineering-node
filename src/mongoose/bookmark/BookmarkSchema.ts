/**
 * @file Implements mongoose schema for Bookmarks
 */
import mongoose from "mongoose"
import {Bookmark} from "../../models/Bookmark"

/**
 * A Bookmark represents a {@link User} choosing to sava a {@link Tuit} for later reference. The
 * BookmarkSchema represents how a Bookmark is represented in the database.
 * @typedef {BookmarkSchema} BookmarkSchema
 * @property {Tuit} bookmarkedTuit - Tuit being bookmarked
 * @property {User} bookmarkedBy - User bookmarking the Tuit
 */
export const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedTuit: {type: mongoose.Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmarks"})
