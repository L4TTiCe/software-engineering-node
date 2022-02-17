/**
 * @file Declares API for Follow related data access object methods
 */
import {Follow} from "../../models/Follow"

export interface FollowDaoI {
    findAllUsersThatFollowUser(uid: string): Promise<Follow[]>

    findAllUsersFollowedByUser(uid: string): Promise<Follow[]>

    userFollowsUser(follower_uid: string, following_uid: string): Promise<Follow>

    userUnfollowsUser(follower_uid: string, following_uid: string): Promise<object>
}
