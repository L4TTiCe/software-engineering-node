/**
 * @file Controller RESTful Web service API for {@link Message} resource
 */
import {Express, Request, Response} from "express";
import {MessageControllerI} from "../interfaces/message/MessageController";
import {MessageDao} from "../daos/MessageDao";
import bodyParser from "body-parser";
import {Message} from "../models/Message";

export class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance = (app: Express): MessageController => {
        if (MessageController.messageController === null) {
            MessageController.messageController = new MessageController();

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}));
            app.use(bodyParser.json());

            app.post(
                "/users/:uid/messages",
                MessageController.messageController.userSendsMessage);
            app.get(
                "/users/:uid/messages/received",
                MessageController.messageController.userFetchesAllReceivedMessages);
            app.get(
                "/users/:uid/messages/sent",
                MessageController.messageController.userFetchesAllSentMessages);
            app.delete(
                "/users/:uid/messages/:mid",
                MessageController.messageController.userDeletesMessage);
        }
        return MessageController.messageController;
    }

    public userSendsMessage(req: Request, res: Response): void {
        MessageController.messageDao.sendMessage(req.body, req.params.uid)
            .then((message: Message) => res.json(message))
            .catch((status) => res.json(status));
    }

    public userFetchesAllReceivedMessages(req: Request, res: Response): void {
        MessageController.messageDao.findAllReceivedMessages(req.params.uid)
            .then((messages: Message[]) => res.json(messages))
            .catch((status) => res.json(status));
    }

    public userFetchesAllSentMessages(req: Request, res: Response): void {
        MessageController.messageDao.findAllSentMessages(req.params.uid)
            .then((messages: Message[]) => res.json(messages))
            .catch((status) => res.json(status));
    }

    public userDeletesMessage(req: Request, res: Response): void {
        MessageController.messageDao.deleteMessage(req.params.mid)
            .then((status: object) => res.send(status))
            .catch((status) => res.json(status));
    }
}
