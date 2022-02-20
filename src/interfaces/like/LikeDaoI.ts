/**
 * @file Declares API for Likes related data access object methods
 */
import {Like} from "../../models/Like";

export interface LikeDaoI {
    /**
     * Returns the {@link User}s that liked a {@link Tuit}
     * @param tid {string} - the TID of the Tuit
     * @return {Promise<Like[]>} - Promise containing all the Users who liked the Tuit
     */
    findAllUsersThatLikedTuit(tid: string): Promise<Like[]>;

    /**
     * Returns the {@link Tuit}s liked by a {@link User}
     * @param uid {string} - the UID of the User
     * @return {Promise<Like[]>} - Promise containing the Tuits liked by the User
     */
    findAllTuitsLikedByUser(uid: string): Promise<Like[]>;

    /**
     * Deletes the record of the {@link User} liking a {@link Tuit}
     * @param tid {string} - the TID of the Tuit
     * @param uid {string} - the UID of the User
     * @return {Promise<object>} the status of the delete operation
     */
    userUnlikesTuit(tid: string, uid: string): Promise<object>;

    /**
     * Records the {@link User} liking a {@link Tuit}
     * @param tid {string} - the TID of the Tuit
     * @param uid {string} - the UID of the User
     * @return {Promise<Like>} the Like record added to the database
     */
    userLikesTuit(tid: string, uid: string): Promise<Like>;
}
