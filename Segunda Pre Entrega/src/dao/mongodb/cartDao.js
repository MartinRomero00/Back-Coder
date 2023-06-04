import {cartModel} from './models/cartModel.js';

export const getCart = async () => {    
    try {
        return await cartModel.find({});
    } catch (error) {
        console.log(error);
    }
}

export const createCart = async () => {
    try {
        const cart = new cartModel();
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}

export const getCartById = async (id) => {
    try {
        const cart = await cartModel.findById(id);
        return cart;
    } catch (error) {
        console.log(error);
    }
}

export const addProductToCart = async (id, idprod) => {
    try {
        const cart = await cartModel.findById(id);
        cart.carrito.push(idprod);
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductFromCart = async (id, productId) => {
    try {
        const cart = await cartModel.findById(id);
        const productIndex = cart.carrito.findIndex(product => product._id == productId);
        cart.carrito.splice(productIndex, 1);
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}

export const deleteCart = async (id) => {
    try {
        return await cartModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

export const updateProductCart = async (id, productId) => {
    try {
        const cart = await cartModel.findById(id);
        cart.carrito.push(productId);
        return await cart.save();
    } catch (error) {
        console.log(error);
    }
}