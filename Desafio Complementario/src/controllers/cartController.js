import { getCartService, getCartByIdService, addCartService, addProductToCartService, deleteCartService } from "../services/cartService.js";

export const getCartController = async (req, res, next) => {
    try {
        const cart = await getCartService();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const getCartByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cart = await getCartByIdService(id);
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const addCartController = async (req, res, next) => {
    try {
        const newCart = await addCartService();
        res.status(200).json(newCart);
    } catch (error) {
        next(error);
    }
}

export const addProductToCartController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const updatedCart = await addProductToCartService(id, product);
        res.status(200).json(updatedCart);
    } catch (error) {
        next(error);
    }
}

export const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCart = await deleteCartService(id);
        res.status(200).json(deletedCart);
    } catch (error) {
        next(error);
    }
}