/**
 * @file Declares Like data type representing relationship between
 * users and tuits, as in user likes a tuit
 */
import {Tuit} from "./Tuit";
import {User} from "./user/User";

/**
 * Represents likes relationship between a {@link User} and a {@link Tuit}, as in a user likes a tuit
 * @typedef {Like} Like
 * @property {Tuit} tuit - Tuit being liked
 * @property {User} likedBy - User liking the tuit
 */
export interface Like {
    tuit: Tuit;
    likedBy: User;
}

