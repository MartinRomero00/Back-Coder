import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    carrito: []
});

export const CartModel = mongoose.model("cart", cartSchema);