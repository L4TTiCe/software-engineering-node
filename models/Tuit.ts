import {User} from "./User"

export class Tuit {
    private tuit: string = "";
    private postedOn: Date = new Date();
    private postedBy: User | null = null;
}
