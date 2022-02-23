/**
 * @file Declares the interface for the MessageController that handles API calls that deal
 * with the message resource
 */
import {Request, Response} from "express";

/**
 * Defines the use cases the {@link MessageController} is to support.
 */
export interface MessageControllerI {
    /**
     * Records the {@link Message} sent by the {@link User}, and sends the record written to the
     * database as a JSON Response
     * @param req {Request} - the Request containing UIDs of the sender and recipient, with the message
     * @param res {Response} - the Response containing record written to the database
     */
    userSendsMessage(req: Request, res: Response): void;

    /**
     * Retrieves all the {@link Message}s sent by the {@link User}, and send it back as a JSON Response.
     * @param req {Request} - the Request containing UIDs of the user
     * @param res {Response} - the Response containing messages Sent by the User
     */
    userFetchesAllSentMessages(req: Request, res: Response): void;

    /**
     * Retrieves all the {@link Message}s received by the {@link User}, and send it back as a JSON Response.
     * @param req {Request} - the Request containing UIDs of the user
     * @param res {Response} - the Response containing messages Received by the User
     */
    userFetchesAllReceivedMessages(req: Request, res: Response): void;

    /**
     * Deletes the record of the {@link Message} sent by the {@link User}, and sends
     * the status of the operation as a JSON Response
     * @param req {Request} - the Request containing ID of the message to be deleted
     * @param res {Response} - the Response containing status of the delete operation
     */
    userDeletesMessageById(req: Request, res: Response): void;

    /**
     * Deletes the record of the {@link Message}s sent by the {@link User}, to another User and sends
     * the status of the operation as a JSON Response
     * @param req {Request} - the Request containing UID of the sender and receiver
     * @param res {Response} - the Response containing status of the delete operation
     */
    userDeletesMessagesFromUser(req: Request, res: Response): void;

    /**
     * Deletes the records of all {@link Message}s sent and received by the {@link User}, and sends
     * the status of the operation as a JSON Response
     * @param req {Request} - the Request containing UID of the User
     * @param res {Response} - the Response containing status of the delete operation
     */
    userDeletesAllMessages(req: Request, res: Response): void;
}
