import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from "../dao/mongodb/productDao.js";

export const getProductsService = async (page,limit, ord) => {
    try {
        return await getProducts(page, limit, ord);
    } catch (error) {
        console.log(error);
    }
}

export const getProductByIdService = async (id) => {
    try {
        return await getProductById(id);
    } catch (error) {
        console.log(error);
    }
}

export const addProductService = async (product) => {
    try {
        return await addProduct(product);
    } catch (error) {
        console.log(error);
    }
}

export const updateProductService = async (id, product) => {
    try {
        return await updateProduct(id, product);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductService = async (id) => {
    try {
        return await deleteProduct(id);
    } catch (error) {
        console.log(error);
    }
}