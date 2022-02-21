/**
 * @file Declares API for Message related data access object methods
 */
import {Message} from "../../models/Message";

export interface MessageDaoI {
    /**
     * Creates a message from a {@link User} to another User with the passed in data.
     * @param message - the message to be sent
     * @param uid - the UID of the sender
     */
    sendMessage(message: Message, uid:string): Promise<Message>;

    /**
     * Retrieves all sent messages of a {@link User}
     * @param uid - The UID of a User who's sent messages are to be retrieved
     */
    findAllSentMessages(uid: string): Promise<Message[]>;

    /**
     * Retrieves all received messages of a {@link User}
     * @param uid - The UID of a User who's received messages are to be retrieved
     */
    findAllReceivedMessages(uid: string): Promise<Message[]>;

    /**
     * Deletes the message with the specified MID from both the {@link User}s
     * @param mid - the ID of the Message (MID) to be deleted
     */
    deleteMessage(mid: String): Promise<object>;
}
