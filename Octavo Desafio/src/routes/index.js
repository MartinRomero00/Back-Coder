import { Router } from "express";
import localRouter from "./localRouter.js";
import productRouter from "./productRouter.js";
import ticketRouter from "./ticketRouter.js";
import { authProducts } from "../middlewares/authProducts.js";
import loggerRouter from "./loggerRouter.js";

const mainRouter = Router();

mainRouter.use('/local', localRouter);
mainRouter.use('/product', authProducts, productRouter);
mainRouter.use('/ticket', ticketRouter);
mainRouter.use('/logger', loggerRouter);

export default mainRouter;