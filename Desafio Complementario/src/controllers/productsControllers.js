import { getService, getByIdService, addService, updateService,deleteService } from "../services/productsService.js";

export const getController = async (req, res, next) => {
    try {
        const products = await getService();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export const getByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await getByIdService(id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export const addController = async (req, res, next) => {
    try {
        const product = req.body;
        const newProduct = await addService(product);
        res.status(200).json(newProduct);
    } catch (error) {
        next(error);
    }
}

export const updateController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const updatedProduct = await updateService(id, product);
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
}

export const deleteController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await deleteService(id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        next(error);
    }
}