import { addProductToCart } from "../dao/mongoDB/userDao.js";

export const addProductToCartService = async (idUser, idProduct, quantity) => {
    try {
        return await addProductToCart(idUser, idProduct, quantity);
    } catch (error) {
        throw new Error(error.message);
    }
}

