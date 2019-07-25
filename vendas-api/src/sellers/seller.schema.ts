import * as mongoose from 'mongoose';// and @types/mongoose

export const SellerSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,   
        trim: true,
        unique: true,     
    },
    name: {
        type: String,
        required: true,   
        trim: true,     
    },
    birth: {
        type: Date,
        required: true,   
        trim: true, 
    }

}, { timestamps: true })