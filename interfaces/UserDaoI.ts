// The data access object design pattern (DAO) encapsulates data access logic to
// decouple database access mechanism from the rest of the application.
import {User} from "../models/User"

export interface UserDaoI {
    findAllUsers(): Promise<User[]>

    findUserById(uid: string): Promise<User>

    createUser(user: User): Promise<User>

    updateUser(uid: string, user: User): Promise<object>

    deleteUser(uid: string): Promise<object>
}
