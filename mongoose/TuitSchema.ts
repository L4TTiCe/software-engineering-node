import mongoose from "mongoose"

const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    postedOn: {type: Date, default: Date.now},
}, {collection: 'tuits'})

export default TuitSchema