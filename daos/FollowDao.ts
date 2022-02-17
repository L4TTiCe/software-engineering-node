import {FollowDaoI} from "../interfaces/follow/FollowDaoI"
import {Follow} from "../models/Follow"
import {FollowModel} from "../mongoose/follow/FollowModel"

export class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance(): FollowDao {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao()
        }
        return FollowDao.followDao
    }

    public async findAllUsersFollowedByUser(uid: string): Promise<Follow[]> {
        return FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
    }

    public async findAllUsersThatFollowUser(uid: string): Promise<Follow[]> {
        return FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
    }

    public async userFollowsUser(followed_uid: string, following_uid: string): Promise<Follow> {
        return FollowModel
            .create({userFollowed: followed_uid, userFollowing: following_uid})
    }

    public async userUnfollowsUser(followed_uid: string, following_uid: string): Promise<object> {
        return FollowModel
            .deleteOne({userFollowed: followed_uid, userFollowing: following_uid})
    }

}
