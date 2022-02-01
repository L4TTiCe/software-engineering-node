import express from 'express'
import mongoose from 'mongoose'
import UserController from "./controllers/UserController"
import TuitController from "./controllers/TuitController"

// Connecting to DB
mongoose.connect('mongodb://root:root_docker12345@mongodb:27017')
    .catch((err: any) => {
        console.log(err)
    })
mongoose.connection.once('open', () => {
    console.log('MongoDB connection established successfully')
})


const app = express();
UserController.getInstance(app)
TuitController.getInstance(app)

app.get('/hello', (req, res) =>
    res.send('Hello World!'))

const PORT = 4000
app.listen(process.env.PORT || PORT)