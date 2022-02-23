/**
 * @file Declares the interface for the FollowController that handles API calls that deal
 * with the Follow resource
 */
import {Request, Response} from "express";

/**
 * Defines the use cases the {@link FollowController} is to support.
 */
export interface FollowControllerI {
    /**
     * Sends all the {@link User}s who follow a User
     * @param req {Request} - request containing the User's uid whose followers are to be retrieved
     * @param res {Response} - response containing the Following Users
     */
    findAllUsersThatFollowUser(req: Request, res: Response): void;

    /**
     * Sends all the {@link User}s who are followed by  a User
     * @param req {Request} - request containing the User's uid whose followed users are to be retrieved
     * @param res {Response} - response containing the followed users
     */
    findAllUsersFollowedByUser(req: Request, res: Response): void;

    /**
     * Records a {@link User} following another User
     * @param req {Request} - request containing the User's and the followed User's uid
     * @param res {Response} - response containing the record written to the database
     */
    userFollowsUser(req: Request, res: Response): void;

    /**
     * Removes the record of a {@link User} following another User
     * @param req {Request} - request containing the User's and the followed User's uid
     * @param res {Response} - response containing the status of the operations
     */
    userUnfollowsUser(req: Request, res: Response): void;

    /**
     * Removes the records of a {@link User} following any another Users
     * @param req {Request} - request containing the User's uid
     * @param res {Response} - response containing the status of the operations
     */
    userUnfollowsAllUsers(req: Request, res: Response): void;
}
