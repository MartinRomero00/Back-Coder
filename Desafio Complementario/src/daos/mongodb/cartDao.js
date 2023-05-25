import { CartModel } from "./models/cartModel.js";

export const getCart = async () => {
    try {
        return await CartModel.find({});
    } catch (error) {
        console.log(error);
    }
}

export const getCartById = async (id) => {
    try {
        return await CartModel.findById(id);
    } catch (error) {
        console.log(error);
    }
}

export const addCart = async () => {
    try {
        return await CartModel.create({carrito: []});
    } catch (error) {
        console.log(error);
    }
}

export const addProductToCart = async (id, obj) => {
    try {
        return await CartModel.findByIdAndUpdate(id, {$push: {carrito: obj}});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCart = async (id) => {
    try {
        return await CartModel.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
}
