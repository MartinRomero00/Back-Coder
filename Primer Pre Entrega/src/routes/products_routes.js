import { Router } from "express";
import { __dirname } from "../path.js";
import { addProduct, getProducts, getProductById, updateProduct,deleteProduct } from "../manager/products_manager.js";
import { productValidator } from "../middlewares/product_validator.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const products = await getProducts();
        const {limit} = req.query;
        let productsLimit
        if (limit) {
            productsLimit = products.filter(product => product.id <= Number(limit));
        } else {
            productsLimit = products;
        }
        res.status(200).json(productsLimit);
    } catch (error) {
        console.log(error);
    }
});

router.get("/:pid", async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await getProductById(Number(pid));
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/", productValidator ,async (req, res) => {
    try {
        const { title, description, price, code, thumbnail, stock, status, category } = req.body;
        const product = await addProduct(title, description, price, code, thumbnail, stock, status, category);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
});

router.put("/:pid",productValidator, async (req, res) => {
    try {
        const { pid } = req.params;
        const { title, description, price, code, thumbnail, stock, status, category } = req.body;
        const product = await updateProduct(Number(pid), title, description, price, code, thumbnail, stock, status, category);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await deleteProduct(Number(id));
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
});

export default router;