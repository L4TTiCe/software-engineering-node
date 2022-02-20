/**
 * @file Declares the interface for the UserController that handles API calls that deal
 * with the User resource
 */
import {Request, Response} from "express";

export interface UserControllerI {
    /**
     * Creates a {@link User}
     * @param req {Request} - Request containing the details of User to be created
     * @param res {Response} - Response containing the created User
     */
    createUser(req: Request, res: Response): void;

    /**
     * Sends all the {@link User}s as a JSON Response
     * @param req {Request} - The request received
     * @param res {Response} - Response containing all the Users
     */
    findAllUsers(req: Request, res: Response): void;

    /**
     * Sends the {@link User} as a JSON
     * @param req {Request} - Request containing the UID of the User
     * @param res {Response} - Response containing the User
     */
    findUserById(req: Request, res: Response): void;

    /**
     * Updates a {@link User}
     * @param req {Request} - Request containing the contents of User to be updated
     * @param res {Response} - Response containing the updated User
     */
    updateUser(req: Request, res: Response): void;

    /**
     * Deletes a {@link User}
     * @param req {Request} - Request containing the uid of User to be deleted
     * @param res {Response} - Response containing the status of the delete operation
     */
    deleteUser(req: Request, res: Response): void;
}
