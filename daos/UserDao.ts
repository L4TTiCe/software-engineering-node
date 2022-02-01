import {User} from "../models/User"
import {UserModel} from "../mongoose/UserModel"
import {UserDaoI} from "../interfaces/UserDaoI"

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
            .find()
    }

    public async findUserById(uid: string): Promise<User> {
        return UserModel
            .findById(uid)
    }

    public async createUser(user: User): Promise<any> {
        return UserModel
            .create(user)
    }

    public async deleteUser(uid: string): Promise<any> {
        return UserModel
            .deleteOne({_id: uid})
    }

    public async updateUser(uid: string, user: User): Promise<any> {
        return UserModel
            .updateOne({_id: uid}, {$set: user})
    }
}
