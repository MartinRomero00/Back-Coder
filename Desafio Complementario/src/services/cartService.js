import { getCart, getCartById, addCart, addProductToCart, deleteCart } from "../daos/mongodb/cartDao.js";

export const getCartService = async () => {
    try {
        return await getCart();
    } catch (error) {
        console.log(error);
    } 
}

export const getCartByIdService = async (id) => {
    try {
        const doc = await getCartById(id);
        if (!doc) throw new Error('No se encontró el carrito');
        else return doc;
    } catch (error) {
        console.log(error);
    }
}

export const addCartService = async () => {
    try {
        const newDoc = await addCart();
        if (!newDoc) throw new Error('No se pudo agregar el carrito');
        else return newDoc;
    } catch (error) {
        console.log(error);
    }
}

export const addProductToCartService = async (id, obj) => {
    try {
        const doc = await getCartById(id);
        if (!doc){
            throw new Error('No se encontró el carrito');
        } else{
            const updatedDoc = await addProductToCart(id, obj);
            if (!updatedDoc) throw new Error('No se pudo agregar el producto al carrito');
            else return obj;
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteCartService = async (id) => {
    try {
        const doc = await getCartById(id);
        if (!doc) throw new Error('No se encontró el carrito');
        else {
            const deletedDoc = await deleteCart(id);
            if (!deletedDoc) throw new Error('No se pudo eliminar el carrito');
            else return deletedDoc;
        }
    } catch (error) {
        console.log(error);
    }
}