import {User} from "../models/user/User"
import {UserModel} from "../mongoose/user/UserModel"
import {UserDaoI} from "../interfaces/user/UserDaoI"

export class UserDao implements UserDaoI {
    private static userDao: UserDao = new UserDao()

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance(): UserDao {
        return this.userDao
    }

    public async findAllUsers(): Promise<User[]> {
        return UserModel
            .find().select({'password': 0})
    }

    public async findUserById(uid: string): Promise<User> {
        return UserModel
            .findById(uid).select({'password': 0})
    }

    public async createUser(user: User): Promise<User> {
        return UserModel
            .create(user)
    }

    public async deleteUser(uid: string): Promise<object> {
        return UserModel
            .deleteOne({_id: uid})
    }

    public async updateUser(uid: string, user: User): Promise<object> {
        return UserModel
            .updateOne({_id: uid}, {$set: user})
    }
}
