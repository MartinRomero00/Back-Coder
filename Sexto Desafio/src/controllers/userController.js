import { registerService, loginService } from "../services/userServices.js";

export const registerController = async (req, res, next) => {
    try {
        const user = await registerService(req.body);
        if (user) {
            res.status(200).json({message: 'User created successfully'});
        } else {
            res.status(400).json({message: 'User already exists'});
        }
    } catch (error) {
        console.log(error);
    }
}

export const loginController = async (req, res, next) => {
    try {
        const user = await loginService(req.body);
        if (user) {
            req.session.user = user;
            res.status(200).json({message: 'User logged in successfully', user: req.session.user});
        } else {
            res.status(400).json({message: 'User not found'});
        }
    } catch (error) {
        console.log(error);
    }
}
