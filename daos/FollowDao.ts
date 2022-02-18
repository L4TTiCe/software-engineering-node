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
            .populate("userFollowed", {'password': 0})
    }

    public async findAllUsersThatFollowUser(uid: string): Promise<Follow[]> {
        return FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing", {'password': 0})
    }

    public async userFollowsUser(followedUid: string, followingUid: string): Promise<Follow> {
        return FollowModel
            .create({userFollowed: followedUid, userFollowing: followingUid})
    }

    public async userUnfollowsUser(followedUid: string, followingUid: string): Promise<object> {
        return FollowModel
            .deleteOne({userFollowed: followedUid, userFollowing: followingUid})
    }

}
