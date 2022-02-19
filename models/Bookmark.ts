/**
 * @file Declares Bookmark data type representing relationship between
 * user and tuit, as in user bookmarks a Tuit
 */
import {User} from "./user/User";
import {Tuit} from "./Tuit";

/**
 * @typedef Bookmark Represents the bookmarking relationship between a user and tuit,
 * where a user bookmarks a tuit
 * @property {Tuit} bookmarkedTuit Tuit being bookmarked
 * @property {User} bookmarkedBy User bookmarking the Tuit
 */
export interface Bookmark {
    bookmarkedTuit: Tuit;
    bookmarkedBy: User;
}
