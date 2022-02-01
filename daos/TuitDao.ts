import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";
import UserDao from "../daos/UserDao";
import User from "../models/User";

export default class TuitDao implements TuitDaoI {
    private static tuitDao: TuitDao = new TuitDao()

    // Prevent Initiation of Object
    private constructor() {}

    static getInstance(): TuitDao {
        return this.tuitDao
    }

    async createTuit(tuit: Tuit): Promise<Tuit> {
        return TuitModel.create(tuit);
    }

    async deleteTuit(tid: string): Promise<any> {
        return TuitModel.deleteOne({_id: tid});
    }

    async findAllTuits(): Promise<Tuit[]> {
        return TuitModel.find().populate('postedBy');
    }

    async findTuitById(tid: string): Promise<Tuit> {
        return TuitModel.findById(tid).populate('postedBy');
    }

    async findTuitsByUser(uid: string): Promise<Tuit[]> {
        let userDao = UserDao.getInstance();
        const user: User = await userDao.findUserById(uid)

        return TuitModel.find({postedBy: user});
    }

    async updateTuit(tid: string, tuit: Tuit): Promise<any> {
        return TuitModel.updateOne({_id: tid}, {$set: tuit})
    }

}