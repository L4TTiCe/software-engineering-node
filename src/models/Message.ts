/**
 * @file Declares Message data type representing a Message between a
 * {@link User} and another user, as in 'A User messages another User'
 */
import {User} from "./user/User"

/**
 * Represents a Message from a {@link User} to another User.
 * @property {string} message - The message sent
 * @property {Date} sentOn - When the message was sent
 * @property {User} to - The User who sent the message
 * @property {User} from - the User to whom the message was sent
 */
export interface Message {
    message: string;
    sentOn: Date;
    from: User;
    to: User;
}
