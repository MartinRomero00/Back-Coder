import { loggerHighOrder, loggerLowOrder } from "../controllers/loggerController.js";
import { Router } from "express";

const loggerRouter = Router();

loggerRouter.get("/high-order", loggerHighOrder);
loggerRouter.get("/low-order", loggerLowOrder);

export default loggerRouter;