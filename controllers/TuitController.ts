import {Request, Response, Express} from "express";
import bodyParser from 'body-parser';
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";

export default class TuitController implements TuitControllerI {
    app: Express;
    tuitDao: TuitDao;
    constructor(app: Express, tuitDao: TuitDao) {
        this.app = app;
        this.tuitDao = tuitDao;
        console.log(tuitDao)

        // Use body-parser middleware to read req.body
        // Reference:
        // https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        this.app.get('/tuits', this.findAllTuits.bind(this));
        this.app.get('/tuits/:tuitid', this.findTuitById.bind(this));
        this.app.post('/tuits', this.createTuit.bind(this));
        this.app.delete('/tuits/:tuitid', this.deleteTuit).bind(this);
        this.app.put('/tuits/:tuitid', this.updateTuit.bind(this));
        this.app.get('/users/:userid/tuits', this.findTuitsByUser.bind(this));
    }

    createTuit(req: Request, res: Response): void {
        this.tuitDao.createTuit(req.body)
            .then(tuit => res.json(tuit))
    }

    deleteTuit(req: Request, res: Response): void {
        this.tuitDao.deleteTuit(req.params.tuitid)
            .then(status => res.json(status));
    }

    findAllTuits(req: Request, res: Response): void {
        this.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits))
    }

    findTuitById(req: Request, res: Response): void {
        this.tuitDao.findTuitById(req.params.tuitid)
            .then(tuit => res.json(tuit))
    }

    findTuitsByUser(req: Request, res: Response): void {
        this.tuitDao.findTuitsByUser(req.params.tuitid)
            .then(tuits => res.json(tuits))
    }

    updateTuit(req: Request, res: Response): void {
        this.tuitDao.updateTuit(req.params.tuitid, req.body)
            .then(status => res.json(status));
    }

}