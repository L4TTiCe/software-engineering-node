import {Request, Response} from "express";

export interface BookmarkControllerI {
    findAllBookmarkedTuits(req: Request, res: Response): void;

    userBookmarksTuit(req: Request, res: Response): void;

    userUnbookmarksTuit(req: Request, res: Response): void;
}
