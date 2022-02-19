/**
 * @file Declares API for Likes related data access object methods
 */
import {Like} from "../../models/Like";

export interface LikeDaoI {
    findAllUsersThatLikedTuit(tid: string): Promise<Like[]>;

    findAllTuitsLikedByUser(uid: string): Promise<Like[]>;

    userUnlikesTuit(tid: string, uid: string): Promise<object>;

    userLikesTuit(tid: string, uid: string): Promise<Like>;
}
