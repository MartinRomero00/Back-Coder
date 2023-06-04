import { getCartService, getCartByIdService, addProductToCartService, deleteCartService, deleteProductFromCartService, updateProductCartService, createCartService } from "../services/cartService.js";

export const getCartController = async (req, res, next) => {
    try {
        const cart = await getCartService();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const createCartController = async (req, res, next) => {
    try {
        const cart = await createCartService();
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

export const addProductToCartController = async (req, res, next) => {
    try {
        const { id, idprod } = req.params;
        const cart = await addProductToCartService(id, idprod);
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const deleteProductFromCartController = async (req, res, next) => {
    try {
        const { id, productId } = req.params;
        const cart = await deleteProductFromCartService(id, productId);
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cart = await deleteCartService(id);
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export const updateProductCartController = async (req, res, next) => {
    try {
        const { id, productId } = req.params;
        
        const cart = await updateProductCartService(id, productId);
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}