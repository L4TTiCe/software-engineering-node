/**
 * @file Implements APIs for User related data access object methods
 */
import {User} from "../models/user/User";
import {UserModel} from "../mongoose/user/UserModel";
import {UserDaoI} from "../interfaces/user/UserDaoI";

/**
 * @class UserDao UserDao Implements the UserDaoI, with all the CRUD functionalities for the User resource
 * @property {UserDao} userDao - Singleton DAO implementing User CRUD operations
 */
export class UserDao implements UserDaoI {
    private static userDao: UserDao = new UserDao();

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * Returns the Singleton Instance of the UserDao
     * @function
     * @return {UserDao} the Singleton Instance of the UserDao
     */
    public static getInstance(): UserDao {
        return this.userDao;
    }

    public async findAllUsers(): Promise<User[]> {
        return UserModel
            .find().select({password: 0});
    }

    public async findUserById(uid: string): Promise<User> {
        return UserModel
            .findById(uid).select({password: 0});
    }

    public async createUser(user: User): Promise<User> {
        return UserModel
            .create(user);
    }

    public async deleteUser(uid: string): Promise<object> {
        return UserModel
            .deleteOne({_id: uid});
    }

    public async updateUser(uid: string, user: User): Promise<object> {
        return UserModel
            .updateOne({_id: uid}, {$set: user});
    }
}
