import { Router } from "express";
import passport from "passport";
import { registerResponse, loginResponse } from "../controllers/localController.js";

const localRouter = Router();

localRouter.post('/register', passport.authenticate('signup'), registerResponse);

localRouter.post('/login', passport.authenticate('login'), loginResponse);

export default localRouter;