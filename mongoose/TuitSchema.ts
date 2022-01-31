import mongoose from "mongoose";
import User from "../models/User";

const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedBy:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    postedOn: {type: Date, default: Date.now},
}, {collection: 'tuits'});

export default TuitSchema;