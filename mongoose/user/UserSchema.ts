import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: {type: String, required: true},
    profilePhoto: String,
    headerImage: String,
    accountType: {type: String, default: "PERSONAL", enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, default: "SINGLE", enum: ["MARRIED", "SINGLE"]},
    biography: String,
    dateOfBirth: Date,
    joined: {type: Date, default: Date.now},
    location: {
        latitude: Number,
        longitude: Number,
    },
}, {collection: "users"})
