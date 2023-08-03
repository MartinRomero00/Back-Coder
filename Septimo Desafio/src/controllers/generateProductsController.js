import { generateProductsService } from "../services/generateProductsService.js";
import { httpsResponseOk, httpsResponseNotFound } from "../middlewares/errorHandler.js";

export const generateProductsController = async (req, res) => {
    try {
        const products = await generateProductsService();
        return products.length > 0 ? httpsResponseOk(res, products)  : httpsResponseNotFound(res, 'Products not found');
    } catch (error) {
        throw new Error(error.message);
    }
}