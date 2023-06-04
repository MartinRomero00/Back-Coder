import {ProductModel} from './models/productModel.js'

export const getProducts = async (page = 1, limit = 2, ord = 1) => {
    try {
        ord = parseInt(ord);
        if (ord === 1) {
            return await ProductModel.paginate({}, {page, limit, sort: {price: 1}});
        } else if (ord === -1) {
            return await ProductModel.paginate({}, {page, limit, sort: {price: -1}});
        } else {
            return await ProductModel.paginate({}, {page, limit});
        }
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        return await ProductModel.findById(id);
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (product) => {
    try {
        return await ProductModel.create(product);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (id, product) => {
    try {
        return await ProductModel.findByIdAndUpdate({_id: id}, product);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}