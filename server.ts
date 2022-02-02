import express, {Request, Response} from "express"
import mongoose from "mongoose"
import {UserController} from "./controllers/UserController"
import {TuitController} from "./controllers/TuitController"

// Connecting to DB
let db_uri: string = process.env.MONGODB_PREFIX + "://" + process.env.MONGODB_USER
    + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_HOST
if (process.env.MONGODB_PORT) {
    db_uri = db_uri + process.env.MONGODB_PORT
}
console.log("Inferred DB_URI: " + db_uri)

mongoose.connect(db_uri)
    .catch((err: object) => {
        console.log(err)
    })
mongoose.connection.once("open", () => {
    console.log("MongoDB connection established successfully")
})


const app = express();
UserController.getInstance(app)
TuitController.getInstance(app)

app.get("/hello", (req: Request, res: Response) =>
    res.send("Hello World!"))

const PORT = 4000
app.listen(process.env.PORT || PORT)
