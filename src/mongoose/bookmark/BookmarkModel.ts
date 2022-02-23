/**
 * @file Implements mongoose model to CRUD
 * documents in the bookmarks collection
 */
import mongoose from "mongoose"
import {BookmarkSchema} from "./BookmarkSchema"

/**
 * A Bookmark represents a {@link User} choosing to sava a {@link Tuit} for later reference. The
 * BookmarkModel is used for creating and reading documents of the Bookmark type defined by the
 * {@link BookmarkSchema} from the underlying MongoDB database.
 * @typedef {BookmarkModel} BookmarkModel
 */
export const BookmarkModel = mongoose.model("BookmarkModel", BookmarkSchema)
