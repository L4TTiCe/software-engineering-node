import {User} from "./user/User";

export interface Tuit {
    tuit: string;
    postedOn: Date;
    postedBy: User | null;
}
