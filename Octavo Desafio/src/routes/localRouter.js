import { Router } from "express";
import passport from "passport";
import { registerResponse, loginResponse } from "../controllers/localController.js";
import { addProductToCartController } from "../controllers/userController.js";
import { authCompra } from "../middlewares/authCompra.js";

const localRouter = Router();

localRouter.post('/register', passport.authenticate('signup'), registerResponse);

localRouter.post('/login', passport.authenticate('login'), loginResponse);

localRouter.post('/addProductToCart/:idUser/:idProduct', authCompra, addProductToCartController);

export default localRouter;