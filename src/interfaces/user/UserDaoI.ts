/**
 * @file Declares API for User related data access object methods
 */

// The data access object design pattern (DAO) encapsulates data access logic to
// decouple database access mechanism from the rest of the application.
import {User} from "../../models/user/User";

export interface UserDaoI {
    /**
     * Creates a {@link User} with the given data
     * @param user {User} - the data to be used to create the User
     * @return {Promise<User>} - promise containing the User created with the given data
     */
    createUser(user: User): Promise<User>;

    /**
     * Returns all the {@link User}s
     * @return {Promise<User[]>} - Promise containing all the Users
     */
    findAllUsers(): Promise<User[]>;

    /**
     * Returns the {@link User} with the given UID
     * @param uid {string} - the UID of the User to be returned
     * @return {Promise<User>} - promise containing the User with the given UID
     */
    findUserById(uid: string): Promise<User>;

    /**
     * Updates the {@link User} and returns the updated User
     * @param uid {string} - the UID of the User to be updated
     * @param user {User} - the data to be used to update the User
     * @return {Promise<User>} - promise containing the User updated with the given data
     */
    updateUser(uid: string, user: User): Promise<object>;

    /**
     * Deleted the {@link User}
     * @param uid {string} - the UID of the User to be deleted
     * @return {Promise<object>} the status of the delete operation
     */
    deleteUser(uid: string): Promise<object>;
}
