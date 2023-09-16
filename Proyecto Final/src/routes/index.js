import { Router } from "express";
import usersRouter from "./usersRouter.js";
import productRouter from "./productRouter.js";
import { authProducts } from "../middlewares/authProducts.js";


const mainRouter = Router();

mainRouter.use('/users', usersRouter);
mainRouter.use('/product', authProducts, productRouter);


export default mainRouter;