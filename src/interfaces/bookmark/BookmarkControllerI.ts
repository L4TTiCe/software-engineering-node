/**
 * @file Declares the interface for the BookmarkController
 */
import {Request, Response} from "express";

export interface BookmarkControllerI {
    /**
     * Sends all the {@link Tuit}s bookmarked by a {@link User} as a JSON
     * @param req {Request} - request containing the User's uid whose bookmarks are to be retrieved
     * @param res {Response} - response containing the Bookmarked Tuits
     */
    findAllBookmarkedTuits(req: Request, res: Response): void;

    /**
     * Records a {@link Tuit} bookmarked by a {@link User}
     * @param req {Request} - request containing the User's uid and the Tuit's tid involved in the bookmarking.
     * @param res {Response} - response containing the record written to the database
     */
    userBookmarksTuit(req: Request, res: Response): void;

    /**
     * Records a {@link Tuit} unbookmarked by a {@link User}
     * @param req {Request} - request containing the User's uid and the Tuit's tid involved in the unbookmarking.
     * @param res {Response} - response containing the status of the operation
     */
    userUnbookmarksTuit(req: Request, res: Response): void;
}
