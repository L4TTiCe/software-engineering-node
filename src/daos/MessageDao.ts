/**
 * @file Implements APIs for messaging related data access object methods
 */
import {MessageDaoI} from "../interfaces/message/MessageDaoI";
import {Message} from "../models/Message";
import {MessageModel} from "../mongoose/message/MessageModel";
import {UserDao} from "./UserDao";

/**
 * @class MessageDao MessageDao Implements the MessageDaoI, with all the CRUD functionalities for the message resource
 * @property {MessageDao} MessageDao - Singleton DAO implementing Like CRUD operations
 */
export class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null

    // Prevent Initiation of Object
    private constructor() {
    }

    /**
     * Returns the Singleton Instance of the MessageDao
     * @function
     * @return {MessageDao} the Singleton Instance of the MessageDao
     */
    public static getInstance(): MessageDao {
        if (MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao
    }

    public async sendMessage(message: Message, uid:string): Promise<Message> {
        message.from = await UserDao.getInstance()
            .findUserById(uid);
        return MessageModel
            .create(message)
    }

    public async findAllReceivedMessages(uid: string): Promise<Message[]> {
        return MessageModel
            .find({to: uid})
            .populate("from", {password: 0})
    }

    public async findAllSentMessages(uid: string): Promise<Message[]> {
        return MessageModel
            .find({from: uid})
            .populate("to", {password: 0})
    }

    public async deleteMessage(mid: String): Promise<object> {
        return MessageModel.deleteOne({_id: mid})
    }
}
