import {Express, Request, Response} from "express"
import bodyParser from 'body-parser'
import TuitDao from "../daos/TuitDao"
import TuitControllerI from "../interfaces/TuitControllerI"

export default class TuitController implements TuitControllerI {
    private static tuitDao: TuitDao
    private static tuitController: TuitController | null = null;

    // Prevent Initiation of Object
    private constructor() {
    }

    public static getInstance(app: Express): TuitController {
        if (TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController()
            TuitController.tuitDao = TuitDao.getInstance()

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({extended: false}))
            app.use(bodyParser.json())

            app.get('/tuits', TuitController.tuitController.findAllTuits)
            app.get('/tuits/:tid', TuitController.tuitController.findTuitById)
            app.post('/tuits', TuitController.tuitController.createTuit)
            app.delete('/tuits/:tid', TuitController.tuitController.deleteTuit)
            app.put('/tuits/:tid', TuitController.tuitController.updateTuit)
            app.get('/users/:uid/tuits', TuitController.tuitController.findTuitsByUser.bind)
        }
        return TuitController.tuitController
    }

    createTuit(req: Request, res: Response): void {
        TuitController.tuitDao.createTuit(req.body)
            .then(tuit => res.json(tuit))
    }

    deleteTuit(req: Request, res: Response): void {
        TuitController.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));
    }

    findAllTuits(req: Request, res: Response): void {
        TuitController.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits))
    }

    findTuitById(req: Request, res: Response): void {
        TuitController.tuitDao.findTuitById(req.params.tid)
            .then(tuit => res.json(tuit))
    }

    findTuitsByUser(req: Request, res: Response): void {
        TuitController.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuits => res.json(tuits))
    }

    updateTuit(req: Request, res: Response): void {
        TuitController.tuitDao.updateTuit(req.params.tid, req.body)
            .then(status => res.json(status))
    }

}