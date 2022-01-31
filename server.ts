import express from 'express';
import mongoose from 'mongoose';
import UserDao from "./daos/UserDao";
import UserController from "./controllers/UserController";

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
new UserController(app, userDao);

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

const PORT = 4000;
app.listen(process.env.PORT || PORT);