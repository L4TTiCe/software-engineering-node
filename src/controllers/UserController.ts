/**
 * @file Controller RESTful Web service API for {@link User} resource
 */
import {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import {UserDao} from "../daos/UserDao";
import {UserControllerI} from "../interfaces/user/UserControllerI";
import {User} from "../models/user/User";

/**
 * @class UserController Implements RESTful Web service API for {@link User} resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /user to create a new User
 *     </li>
 *     <li>GET /users to retrieve all the users in the database
 *     </li>
 *     <li>GET /users/:uid to retrieve the User with the passed in UID
 *     </li>
 *     <li>PUT /users/:uid to update the User with the passed in UID
 *     </li>
 *     <li>DELETE /users/:uid to delete the User with the passed in UID
 *     </li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {UserController} UserController Singleton controller implementing
 * RESTful Web service API
 */
export class UserController implements UserControllerI {
    private static userDao: UserDao;
    private static userController: UserController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * @param app {Express} the Express instance to attach the controller to
     * @return {UserController} the singleton UserController instance
     */
    public static getInstance(app: Express): UserController {
        if (UserController.userController === null) {
            UserController.userController = new UserController();
            UserController.userDao = UserDao.getInstance();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post("/users", UserController.userController.createUser);
            app.get("/users", UserController.userController.findAllUsers);
            app.get("/users/:uid", UserController.userController.findUserById);
            app.put("/users/:uid", UserController.userController.updateUser);
            app.delete("/users/:uid", UserController.userController.deleteUser);
        }
        return UserController.userController;
    }

    public findAllUsers(req: Request, res: Response): void {
        UserController.userDao.findAllUsers()
            .then((users: User[]) => res.json(users))
            .catch((status) => res.json(status));
    }

    public findUserById(req: Request, res: Response): void {
        UserController.userDao.findUserById(req.params.uid)
            .then((user: User) => res.json(user))
            .catch((status) => res.json(status));
    }

    public createUser(req: Request, res: Response): void {
        UserController.userDao.createUser(req.body)
            .then((user) => res.json(user))
            .catch((status) => res.json(status));
    }

    public deleteUser(req: Request, res: Response): void {
        UserController.userDao.deleteUser(req.params.uid)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }

    public updateUser(req: Request, res: Response): void {
        UserController.userDao.updateUser(req.params.uid, req.body)
            .then((status) => res.json(status))
            .catch((status) => res.json(status));
    }
}
