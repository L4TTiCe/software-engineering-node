/**
 * @file Implements mongoose schema for Users
 */
import mongoose from "mongoose";

/**
 * The UserSchema represents hw a {@link User} is represented in the database.
 * @typedef {UserSchema} UserSchema
 * @property {string} username a string to uniquely represent and identify a User
 * @property {string} password represents the user's password
 * @property {string | null} firstName the user's First name
 * @property {string | null} lastName the user's Last name
 * @property {string} email the user's primary email address
 * @property {string | null} profilePhoto the user's Profile Picture
 * @property {string | null} headerImage the user's Header Image
 * @property {AccountType} accountType the Type of the user's account
 * @property {MaritalStatus} maritalStatus the user's Marital Status
 * @property {string | null} biography the user's Biography or the About section
 * @property {Date | null} dateOfBirth the user's date of birth
 * @property {Date} joined the day the user joined Tuiter
 * @property {Location | null} location the user's Location
 */
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
