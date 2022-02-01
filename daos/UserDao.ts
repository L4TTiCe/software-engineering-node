import User from "../models/User"
import UserModel from "../mongoose/UserModel"
import UserDaoI from "../interfaces/UserDaoI"

export default class UserDao implements UserDaoI {
    private static userDao: UserDao = new UserDao()

    // Prevent Initiation of Object
    private constructor() {}

    static getInstance(): UserDao {
        return this.userDao
    }

    async findAllUsers(): Promise<User[]> {
        return UserModel
            .find()
    }

    async findUserById(uid: string): Promise<User> {
        return UserModel
            .findById(uid)
    }

    async createUser(user: User): Promise<any> {
        return UserModel
            .create(user)
    }

    async deleteUser(uid: string):  Promise<any> {
        return UserModel
            .deleteOne({_id: uid})
    }

    async updateUser(uid: string, user: User): Promise<any> {
        return UserModel
            .updateOne({_id: uid}, {$set: user})
    }
}
