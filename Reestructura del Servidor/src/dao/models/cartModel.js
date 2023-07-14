import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        index: true
    },
});

export const cartModel = mongoose.model('carts', cartSchema);