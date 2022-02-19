/**
 * @file Declares API for Bookmark related data access object methods
 */
import {Bookmark} from "../../models/Bookmark";

export interface BookmarkDaoI {
    findAllBookmarkedTuits(uid: string): Promise<Bookmark[]>;

    userBookmarksTuit(uid: string, tid: string): Promise<Bookmark>;

    userUnbookmarksTuits(uid: string, tid: string): Promise<object>;
}
