/**
 * @file Controller RESTful Web service API for follow resource
 */
import {Express, Request, Response} from "express";
import {FollowDao} from "../daos/FollowDao";
import {FollowControllerI} from "../interfaces/follow/FollowControllerI";
import {Follow} from "../models/Follow";

/**
 * @class FollowController Implements RESTful Web service API for follow resource.
 *
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/follows to retrieve all the users followed by a user
 *     </li>
 *     <li>GET /users/:uid/followers to retrieve all users that are following a user
 *     </li>
 *     <li>POST /users/:uid/follows/:uid to record that a user follows a user
 *     </li>
 *     <li>DELETE users/:uid/follows/:uid to record that a user
 *     no longer follows a user</li>
 * </ul>
 *
 * @property {LikeDao} likeDao Singleton DAO implementing likes CRUD operations
 * @property {LikeController} LikeController Singleton controller implementing
 * RESTful Web service API
 */
export class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance = (app: Express): FollowController => {
        if (FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.get("/users/:uid/follows", FollowController.followController.findAllUsersFollowedByUser);
            app.get("/users/:uid/followers", FollowController.followController.findAllUsersThatFollowUser);
            app.post("/users/:following_uid/follows/:followed_uid", FollowController.followController.userFollowsUser);
            app.delete("/users/:following_uid/follows/:followed_uid", FollowController.followController.userUnfollowsUser);
        }
        return FollowController.followController;
    }

    /**
     * Retrieves all users followed by a user from the database
     *
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user whose follow list is to be fetched
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects who the user follows
     */
    public findAllUsersFollowedByUser(req: Request, res: Response): void {
        FollowController.followDao
            .findAllUsersFollowedByUser(req.params.uid)
            .then((follow: Follow[]) => res.json(follow))
            .catch((status) => res.json(status))
    }

    /**
     * Retrieves all users following a user from the database
     *
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user whose followers list is to be fetched
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects who follow the user
     */
    public findAllUsersThatFollowUser(req: Request, res: Response): void {
        FollowController.followDao
            .findAllUsersThatFollowUser(req.params.uid)
            .then((follow: Follow[]) => res.json(follow))
            .catch((status) => res.json(status))
    }

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters follower_uid and following_uid representing the user that is following the user
     * and the user being followed
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new follow that was inserted in the
     * database
     */
    public userFollowsUser(req: Request, res: Response): void {
        FollowController.followDao
            .userFollowsUser(req.params.followed_uid, req.params.following_uid)
            .then((follow: Follow) => res.json(follow))
            .catch((status) => res.json(status))
    }

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters follower_uid and following_uid representing the user that is unfollowing the user
     * and the user being unfollowed
     * @param {Response} res Represents response to client, including status
     * on whether deleting the follow was successful or not
     */
    public userUnfollowsUser(req: Request, res: Response): void {
        FollowController
            .followDao.userUnfollowsUser(req.params.followed_uid, req.params.following_uid)
            .then((status) => res.send(status))
            .catch((status) => res.json(status))
    }
}
