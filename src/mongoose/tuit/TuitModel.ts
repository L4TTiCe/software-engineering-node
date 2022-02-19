/**
 * @file Implements mongoose model to CRUD
 * documents in the tuits collection
 */
import mongoose from "mongoose"
import {TuitSchema} from "./TuitSchema"

export const TuitModel = mongoose.model("TuitModel", TuitSchema)
