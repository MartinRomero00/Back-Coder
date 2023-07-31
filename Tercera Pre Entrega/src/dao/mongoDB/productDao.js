import { productModel } from "./models/productModel.js";

export const getAll = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        console.log(error);
    }
}

export const getByIdProduct = async (id) => {
    try {
        return await productModel.findById(id);
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (product) => {
    try {
        return await productModel.create(product);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (id, product) => {
    try {
        return await productModel.findByIdAndUpdate(id, product);
    } catch (error) {
        console.log(error);
    }    
}

export const deleteProduct = async (id) => {
    try {
        return await productModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }    
}