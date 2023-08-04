import { addProductToCart } from "../dao/mongoDB/userDao.js";
import { logger } from "../helpers/logger.js";

export const addProductToCartService = async (idUser, idProduct, quantity) => {
    try {
        return await addProductToCart(idUser, idProduct, quantity);
    } catch (error) {
        logger.error(error);
        throw new Error(error.message);
    }
}
