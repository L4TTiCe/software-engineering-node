/**
 * @file Declares Follow data type representing relationship between
 * users, as in user follows another user
 */
import {User} from "./User"

/**
 * @typedef Follow Represents the follow relationship between a user and another user,
 * as in a user follows a user
 * @property {User} userFollowed User being followed
 * @property {User} userFollowing User following the user
 */
export interface Follow {
    userFollowed: User,
    userFollowing: User
}