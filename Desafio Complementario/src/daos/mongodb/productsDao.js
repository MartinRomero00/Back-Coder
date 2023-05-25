import {ProductsModel} from './models/productsModel.js'

export const getProducts = async () => {
    try {
        return await ProductsModel.find({});
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id)  =>{
    try {
        return await ProductsModel.findById(id);
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (obj ) => {
    try {
        return await ProductsModel.create(obj);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (id, obj) => {
    try {
        await ProductsModel.updateOne({_id: id}, obj)
        return obj;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        return await ProductsModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}