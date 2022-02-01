// The data access object design pattern (DAO) encapsulates data access logic to
// decouple database access mechanism from the rest of the application.
import {Tuit} from "../models/Tuit"

export interface TuitDaoI {
    findAllTuits(): Promise<Tuit[]>

    findTuitsByUser(uid: string): Promise<Tuit[]>

    findTuitById(tid: string): Promise<Tuit>

    createTuit(tuit: Tuit): Promise<Tuit>

    updateTuit(tid: string, tuit: Tuit): Promise<any>

    deleteTuit(tid: string): Promise<any>
}
