/**
 * @module Bookmark Declares Bookmark data type representing relationship between
 * {@link User} and {@link Tuit}, as in user bookmarks a Tuit
 */
import {User} from "./user/User";
import {Tuit} from "./Tuit";

/**
 * Represents the bookmarking relationship between a {@link User} and {@link Tuit},
 * where the User chooses to save a Tuit for later reference
 * @typedef {Bookmark} Bookmark
 * @property {Tuit} bookmarkedTuit - {@link Tuit} being bookmarked
 * @property {User} bookmarkedBy - {@link User} bookmarking the {@link Tuit}
 */
export interface Bookmark {
    bookmarkedTuit: Tuit;
    bookmarkedBy: User;
}
