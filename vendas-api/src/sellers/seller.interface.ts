import { ObjectID } from "bson";
import * as mongoose from "mongoose";

export interface ISeeler extends mongoose.Document {
    id?: ObjectID,
    cpf: String,
    name: String,
    birth: Date,
}