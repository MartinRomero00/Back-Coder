import { Router } from "express";
import { getProductsController, getProductByIdController, addProductController, updateProductController, deleteProductController } from "../controllers/productController.js";

const router = Router();

router.get('/', getProductsController);
router.get('/:id', getProductByIdController);
router.post('/', addProductController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;