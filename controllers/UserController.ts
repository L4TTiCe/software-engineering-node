import {Request, Response, Express} from "express"
import UserDao from "../daos/UserDao"
import UserControllerI from "../interfaces/UserControllerI"
import bodyParser from 'body-parser'


export default class UserController implements UserControllerI {
    private static userDao: UserDao
    private static userController: UserController | null = null

    public static getInstance(app: Express): UserController {
        if(UserController.userController === null) {
            UserController.userController = new UserController()
            UserController.userDao = UserDao.getInstance()

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({ extended: false }))
            app.use(bodyParser.json())

            app.get('/users', UserController.userController.findAllUsers)
            app.get('/users/:uid', UserController.userController.findUserById)
            app.post('/users', UserController.userController.createUser)
            app.delete('/users/:uid', UserController.userController.deleteUser)
            app.put('/users/:uid', UserController.userController.updateUser)
        }
        return UserController.userController
    }

    // Prevent Initiation of Object
    private constructor() {}

    findAllUsers(req: Request, res: Response): void {
        UserController.userDao.findAllUsers()
            .then(users => res.json(users))
    }

    findUserById(req: Request, res: Response): void {
        UserController.userDao.findUserById(req.params.uid)
            .then(user => res.json(user))
    }

    createUser(req: Request, res: Response): void {
        UserController.userDao.createUser(req.body)
            .then(user => res.json(user))
    }

    deleteUser(req: Request, res: Response): void {
        UserController.userDao.deleteUser(req.params.uid)
            .then(status => res.json(status))
    }

    updateUser(req: Request, res: Response): void {
        UserController.userDao.updateUser(req.params.uid, req.body)
            .then(status => res.json(status))
    }
}
