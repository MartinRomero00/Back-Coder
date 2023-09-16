import { Router } from "express";
import { getAllController, getByIdController, createProductController, updateProductController, deleteProductController } from "../controllers/productController.js";


const productRouter = Router();

productRouter.get('/', getAllController);
productRouter.get('/:id', getByIdController);
productRouter.post('/', createProductController);
productRouter.put('/:id', updateProductController);
productRouter.delete('/:id', deleteProductController);


export default productRouter;