/**
 * @file server.ts defines the entry point to the app
 */
import express, {Request, Response} from "express"
import mongoose from "mongoose"
import {UserController} from "./controllers/UserController"
import {TuitController} from "./controllers/TuitController"
import {LikeController} from "./controllers/LikeController";
import {FollowController} from "./controllers/FollowController";
import {BookmarkController} from "./controllers/BookmarkController";

/**
 * Connects to the Mongo Database with db connection details from Environment Variables
 */
function connectDatabase(): void {
    // Connecting to DB
    let dbUri: string = process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
        + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_HOST;
    if (process.env.MONGODB_PORT) {
        dbUri = dbUri + process.env.MONGODB_PORT;
    }
    console.log("Inferred DB_URI: " + process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
        + ":*****@" + process.env.MONGODB_HOST);

    mongoose.connect(dbUri)
        .catch((err: object) => {
            console.log(err);
        });
    mongoose.connection.once("open", () => {
        console.log("MongoDB connection established successfully");
    });
}

/**
 * Initializes the Express app and connects the Controllers to the App
 * @return {Express} the Initialized express app
 */
function initializeApp(): express.Express {
    connectDatabase()
    let app = express();

    UserController.getInstance(app);
    TuitController.getInstance(app);
    LikeController.getInstance(app);
    FollowController.getInstance(app);
    BookmarkController.getInstance(app);

    return app
}

/**
 * Starts the Server and listens on the specified PORT
 */
function startServer(port: string | number):void {
    const app = initializeApp()

    app.get("/hello", (req: Request, res: Response) =>
        res.send("Hello World!"));

    app.listen(port);
}

const PORT: number = 4000
startServer(process.env.PORT || PORT)