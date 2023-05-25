import { Router } from "express";
import { getCartController, getCartByIdController, addCartController, addProductToCartController, deleteCartController } from "../controllers/cartController.js";

const router = Router();

router.get('/', getCartController);
router.get('/:id', getCartByIdController);
router.post('/', addCartController);
router.post('/:id/productos', addProductToCartController);
router.delete('/:id', deleteCartController);

export default router;