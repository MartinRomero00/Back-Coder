import { userLoginService, userRegisterService } from "../services/userService.js";

export const userLoginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userLoginService(email, password);
        if (user) {
            req.session.info = {
                email: email,
                password: password,
                role: user.role,
                logged: true
            }
            console.log(req.session.info);
            res.status(200).json({message: 'Login successful'});
        } else{
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        next(error);
    }
}

export const userRegisterController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userRegisterService(email, password);
        if (user) {
            res.status(201).json({message: 'User created'});
        } else{
            res.status(409).json({message: 'User already exists'});
        }
    } catch (error) {
        next(error);
    }
}

export const userLogoutController = async (req, res, next) => {
    try {
        req.session.destroy();
        res.status(200).json({message: 'Logout successful'});
    } catch (error) {
        next(error);
    }
}