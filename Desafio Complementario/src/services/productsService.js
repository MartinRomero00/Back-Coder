import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from "../daos/mongodb/productsDao.js";

export const getService = async () => {
    try {
        return await getProducts();
    } catch (error) {
        console.log(error);
    } 
}

export const getByIdService = async (id) => {
    try {
        const doc = await getProductById(id);
        if (!doc) throw new Error('No se encontró el producto');
        else return doc;
    } catch (error) {
        console.log(error);
    }
}

export const addService = async (obj) => {
    try {
        const newDoc = await addProduct(obj);
        if (!newDoc) throw new Error('No se pudo agregar el producto');
        else return newDoc;
    } catch (error) {
        console.log(error);
    }
}

export const updateService = async (id, obj) => {
    try {
        const doc = await getProductById(id);
        if (!doc){
            throw new Error('No se encontró el producto');
        } else{
            const updatedDoc = await updateProduct(id, obj);
            if (!updatedDoc) throw new Error('No se pudo actualizar el producto');
            else return updatedDoc;
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteService = async (id) => {
    try {
        const doc = await getProductById(id);
        if (!doc) throw new Error('No se encontró el producto');
        else {
            const deletedDoc = await deleteProduct(id);
            if (!deletedDoc) throw new Error('No se pudo eliminar el producto');
            else return deletedDoc;
        }
    } catch (error) {
        console.log(error);
    }
}