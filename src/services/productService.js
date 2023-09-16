import { getAll, getByIdProduct, createProduct, updateProduct, deleteProduct } from "../dao/mongoDB/productDao.js";

export const getAllService = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(error);
    }
}

export const getByIdService = async (id) => {
    try {
        return await getByIdProduct(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const createProductService = async (product) => {
    try {
        return await createProduct(product);
    } catch (error) {
        throw new Error(error);
    }
}

export const updateProductService = async (id, product) => {
    try {
        return await updateProduct(id, product);
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteProductService = async (id) => {
    try {
        return await deleteProduct(id);
    } catch (error) {
        throw new Error(error);
    }
}