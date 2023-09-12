import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        },
    last_name: {
        type: String,
        required: true,
        },
    email: {
        type: String,
        required: true,
        unique: true,
        },
    age: {
        type: Number,
        required: true,
        default: 0
        },
    password: {
        type: String,
        required: true,
        },
    role: {
        type: String,
        default: 'user'
        },
    cart: [{
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        }
        }],
        documents: [{
            name:{
                type: String,
                required: true,
            },
            reference:{
                type: String,
                required: true,
            }
        }],
        last_connection: {
            type: Date,
            default: Date.now(),
        },
        documentStatus:{
            type: String,
            required: true,
            default: 'Documentación pendiente'
        }
    }
);

export const userModel = mongoose.model('users', userSchema);