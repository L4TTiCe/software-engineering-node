/**
 * @file Declares API for Follow related data access object methods
 */
import {Follow} from "../../models/Follow"

export interface FollowDaoI {
    findAllUsersThatFollowUser(uid: string): Promise<Follow[]>

    findAllUsersFollowedByUser(uid: string): Promise<Follow[]>

    userFollowsUser(followerUid: string, followingUid: string): Promise<Follow>

    userUnfollowsUser(followerUid: string, followingUid: string): Promise<object>
}
