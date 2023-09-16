import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        },
    description: {
        type: String,
        required: true,
        },
    price: {
        type: Number,
        required: true,
        },
    stock: {
        type: Number,
        required: true,
        },
    owner: {
        type: String,
        required: true,
        default: 'admin'
        }
});

export const productModel = mongoose.model('products', productSchema);