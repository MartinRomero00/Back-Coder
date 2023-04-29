import { Router } from "express";
import { __dirname } from "../path.js";
import { createCart, getCartById, saveProductToCart } from "../manager/cart_manager.js";

const router = Router();

router.get("/:cid", async (req, res) => {
    try {
        const {cid} = req.params;
        const cart = await getCartById(Number(cid));
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const cart = await createCart();
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
    }
});

router.post("/:cid/productos/:pid", async (req, res) => {
    try {
        const {cid} = req.params;
        const {pid} = req.params
        const cart = await saveProductToCart(Number(cid), Number(pid));
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
    }
});

export default router;