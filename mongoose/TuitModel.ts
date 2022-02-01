import mongoose from "mongoose"
import {TuitSchema} from "./TuitSchema"

export const TuitModel = mongoose.model("TuitModel", TuitSchema)
