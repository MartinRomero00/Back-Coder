import { Router } from "express";
import localRouter from "./localRouter.js";
import productRouter from "./productRouter.js";

const mainRouter = Router();

mainRouter.use('/local', localRouter);
mainRouter.use('/product', productRouter);

export default mainRouter;