import { getAllService, getByIdService, createProductService, updateProductService, deleteProductService } from "../services/productService.js";
import { logger } from "../helpers/logger.js";

export const getAllController = async (req, res) => {
    try {
        const products = await getAllService();
        res.json(products);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}

export const getByIdController = async (req, res) => {
    try {
        const product = await getByIdService(req.params.id);
        res.json(product);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}

export const createProductController = async (req, res) => {
    try {
        const product = await createProductService(req.body);
        res.json(product);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}

export const updateProductController = async (req, res) => {
    try {
        const product = await updateProductService(req.params.id, req.body);
        res.json(product);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}

export const deleteProductController = async (req, res) => {
    try {
        const product = await deleteProductService(req.params.id);
        res.json(product);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}