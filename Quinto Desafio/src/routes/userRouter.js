import { Router } from "express";
import { userLoginController, userRegisterController, userLogoutController } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/login', userLoginController);
userRouter.post('/register', userRegisterController);
userRouter.post('/logout', userLogoutController);

export default userRouter;