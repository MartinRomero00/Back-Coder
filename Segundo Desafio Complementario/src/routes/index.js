import { Router } from "express";
import localRouter from "./localRouter.js";
import productRouter from "./productRouter.js";
import ticketRouter from "./ticketRouter.js";
import { authProducts } from "../middlewares/authProducts.js";
import  viewsRouter  from "./viewsRouter.js";
import mailPassReset from "./mailPassResetRouter.js";


const mainRouter = Router();

mainRouter.use('/local', localRouter);
mainRouter.use('/product', productRouter);
mainRouter.use('/ticket', ticketRouter);
mainRouter.use('/view', viewsRouter);
mainRouter.use('/mail', mailPassReset);


export default mainRouter;