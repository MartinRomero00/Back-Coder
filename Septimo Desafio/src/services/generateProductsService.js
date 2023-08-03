import { generateMockingProducts } from "../generate/generateProducts.js";

export const generateProductsService =  () => {
    try {
        return generateMockingProducts();
    } catch (error) {
        throw new Error(error.message);
    }
}