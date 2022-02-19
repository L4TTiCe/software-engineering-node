/**
 * @file Controller RESTful Web service API for bookmark resource
 */
import {Express, Request, Response} from "express"
import {BookmarkDao} from "../daos/BookmarkDao"
import {BookmarkControllerI} from "../interfaces/bookmark/BookmarkControllerI"
import {Bookmark} from "../models/Bookmark"

/**
 * @class BookmarkController Implements RESTful Web service API for bookmark resource.
 *
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/bookmarks to retrieve all the Tuits bookmarked by a user
 *     </li>
 *     <li>POST /users/:uid/bookmarks/:tid to record that a user bookmarks a Tuit
 *     </li>
 *     <li>DELETE users/:uid/bookmarks/:tid to record that a user
 *     no longer bookmarks that tuit</li>
 * </ul>
 *
 * @property {BookmarkDao} BookmarkDao Singleton DAO implementing bookmark CRUD operations
 * @property {BookmarkController} BookmarkController Singleton controller implementing
 * RESTful Web service API
 */

export class BookmarkController implements BookmarkControllerI {
    private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
    private static bookmarkController: BookmarkController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance = (app: Express): BookmarkController => {
        if (BookmarkController.bookmarkController === null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.get("/users/:uid/bookmarks",
                BookmarkController.bookmarkController.findAllBookmarkedTuits);
            app.post("/users/:uid/bookmarks/:tid",
                BookmarkController.bookmarkController.userBookmarksTuit);
            app.delete("/users/:uid/bookmarks/:tid",
                BookmarkController.bookmarkController.userUnbookmarksTuit);
        }
        return BookmarkController.bookmarkController;
    }

    public findAllBookmarkedTuits(req: Request, res: Response) {
        BookmarkController.bookmarkDao
            .findAllBookmarkedTuits(req.params.uid)
            .then((bookmarkedTuits: Bookmark[]) => res.json(bookmarkedTuits))
            .catch((status) => res.json(status))
    }

    public userBookmarksTuit(req: Request, res: Response) {
        BookmarkController.bookmarkDao
            .userBookmarksTuit(req.params.uid, req.params.tid)
            .then((bookmark: Bookmark) => res.json(bookmark))
            .catch((status) => res.json(status))
    }

    public userUnbookmarksTuit(req: Request, res: Response) {
        BookmarkController.bookmarkDao
            .userUnbookmarksTuits(req.params.uid, req.params.tid)
            .then((status: object) => res.json(status))
            .catch((status) => res.json(status))
    }
}
