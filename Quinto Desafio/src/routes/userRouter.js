import { Router } from "express";
import { userLoginController, userRegisterController } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/login', userLoginController);
userRouter.post('/register', userRegisterController);

export default userRouter;