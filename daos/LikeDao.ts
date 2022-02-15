import LikeDaoI from "../interfaces/LikeDaoI";
import {Like} from "../models/Like";
import {LikeModel} from "../mongoose/LikeModel";

export class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance(): LikeDao {
        if (LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao()
        }
        return LikeDao.likeDao
    }

    public async findAllTuitsLikedByUser(uid: string): Promise<Like[]> {
        return LikeModel
            .find({likedBy: uid})
            .populate("tuit")
    }

    public async findAllUsersThatLikedTuit(tid: string): Promise<Like[]> {
        return LikeModel
            .find({tuit: tid})
            .populate("likedBy")
    }

    public async userLikesTuit(uid: string, tid: string): Promise<Like> {
        return LikeModel.create({tuit: tid, likedBy: uid})
    }

    public async userUnlikesTuit(uid: string, tid: string): Promise<object> {
        return LikeModel.deleteOne({tuit: tid, likedBy: uid})
    }

}