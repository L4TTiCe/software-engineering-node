import {Request, Response, Express} from "express";
import bodyParser from 'body-parser';
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";

export default class TuitController implements TuitControllerI {
    private tuitDao: TuitDao;
    constructor(app: Express) {
        this.tuitDao = TuitDao.getInstance();

        // Use body-parser middleware to read req.body
        // Reference:
        // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.get('/tuits', this.findAllTuits.bind(this));
        app.get('/tuits/:tid', this.findTuitById.bind(this));
        app.post('/tuits', this.createTuit.bind(this));
        app.delete('/tuits/:tid', this.deleteTuit).bind(this);
        app.put('/tuits/:tid', this.updateTuit.bind(this));
        app.get('/users/:uid/tuits', this.findTuitsByUser.bind(this));
    }

    createTuit(req: Request, res: Response): void {
        this.tuitDao.createTuit(req.body)
            .then(tuit => res.json(tuit))
    }

    deleteTuit(req: Request, res: Response): void {
        this.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));
    }

    findAllTuits(req: Request, res: Response): void {
        this.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits))
    }

    findTuitById(req: Request, res: Response): void {
        this.tuitDao.findTuitById(req.params.tid)
            .then(tuit => res.json(tuit))
    }

    findTuitsByUser(req: Request, res: Response): void {
        this.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuits => res.json(tuits))
    }

    updateTuit(req: Request, res: Response): void {
        this.tuitDao.updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));
    }

}