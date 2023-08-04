import { productModel } from "./models/productModel.js";
import { logger } from "../../helpers/logger.js";

export const getAll = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const getByIdProduct = async (id) => {
    try {
        return await productModel.findById(id);
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const createProduct = async (product) => {
    try {
        return await productModel.create(product);
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const updateProduct = async (id, product) => {
    try {
        return await productModel.findByIdAndUpdate(id, product);
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }    
}

export const deleteProduct = async (id) => {
    try {
        return await productModel.findByIdAndDelete(id);
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }    
}