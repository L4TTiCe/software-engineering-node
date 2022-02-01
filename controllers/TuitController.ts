import {Request, Response, Express} from "express";
import bodyParser from 'body-parser';
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";

export default class TuitController implements TuitControllerI {
    private static tuitDao: TuitDao;
    private static tuitController: TuitController | null = null;

    public static getInstance(app: Express): TuitController {
        if(TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController()
            TuitController.tuitDao = TuitDao.getInstance()

            // Use body-parser middleware to read req.body
            // Reference:
            // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
            app.use(bodyParser.urlencoded({ extended: false }))
            app.use(bodyParser.json())

            app.get('/tuits', TuitController.tuitController.findAllTuits.bind(this));
            app.get('/tuits/:tid', TuitController.tuitController.findTuitById.bind(this));
            app.post('/tuits', TuitController.tuitController.createTuit.bind(this));
            app.delete('/tuits/:tid', TuitController.tuitController.deleteTuit).bind(this);
            app.put('/tuits/:tid', TuitController.tuitController.updateTuit.bind(this));
            app.get('/users/:uid/tuits', TuitController.tuitController.findTuitsByUser.bind(this));
        }
        return TuitController.tuitController
    }

    // Prevent Initiation of Object
    private constructor() {}

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
            .then(status => res.json(status));
    }

}