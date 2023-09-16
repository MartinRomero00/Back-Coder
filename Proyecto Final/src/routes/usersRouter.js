import { Router } from "express";
import passport from "passport";
import {
  registerResponse,
  loginResponse,
  getAllController,
  deleteAllController,
} from "../controllers/usersController.js";

const localRouter = Router();

localRouter.post(
  "/register",
  passport.authenticate("signup"),
  registerResponse
);

localRouter.post("/login", passport.authenticate("login"), loginResponse);

localRouter.get("/", getAllController);

localRouter.delete("/", deleteAllController);

export default localRouter;
