import { Router } from 'express';
import { generateProductsController } from '../controllers/generateProductsController.js';

const routerProducts = Router();

routerProducts.get('/', generateProductsController);

export default routerProducts;