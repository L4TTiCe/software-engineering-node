/**
 * @file Declares API for Follow related data access object methods
 */
import {Follow} from "../../models/Follow";

export interface FollowDaoI {
    /**
     * Returns all the {@link User}s Followers
     * @param uid {string} - The UID of the User, who's followers are to be retrieved
     * @return {Promise<Follow[]>} - a Promise containing the User's followers
     */
    findAllUsersThatFollowUser(uid: string): Promise<Follow[]>;

    /**
     * Returns all the {@link User}s followed by the User
     * @param uid {string} - The UID of the User, who's followed Users are to be retrieved
     * @return {Promise<Follow[]>} - a Promise containing the User's followed Users
     */
    findAllUsersFollowedByUser(uid: string): Promise<Follow[]>;

    /**
     * Records a {@link User} following another User
     * @param followerUid {string} - The UID of the user who is following a User
     * @param followingUid {string} - The UID of the user who is being followed
     * @return {Promise<Follow>} the Follow record added to the database
     */
    userFollowsUser(followerUid: string, followingUid: string): Promise<Follow>;

    /**
     * Removes the record a {@link User} following another User
     * @param followerUid {string} - The UID of the user who is unfollowing a User
     * @param followingUid {string} - The UID of the user who is being unfollowed
     * @return {Promise<object>} the status of the delete operation
     */
    userUnfollowsUser(followerUid: string, followingUid: string): Promise<object>;
}
