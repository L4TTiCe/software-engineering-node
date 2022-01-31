import express from 'express';
import mongoose from 'mongoose';
import UserDao from "./daos/UserDao";
import UserController from "./controllers/UserController";
import TuitDao from "./daos/TuitDao";
import TuitController from "./controllers/TuitController";

// Connecting to DB
mongoose.connect('mongodb://root:root_docker12345@mongodb:27017')
    .catch((err: any) => {
        console.log(err)
    })
mongoose.connection.once('open', () => {
    console.log('MongoDB connection established successfully');
})


const app = express();
const userDao = new UserDao()
const tuitDao = new TuitDao()
new UserController(app, userDao);
new TuitController(app, tuitDao)

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

const PORT = 4000;
app.listen(process.env.PORT || PORT);