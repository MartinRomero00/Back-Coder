import { getByEmail, getById, userLogin } from "../dao/mongoDB/userDao.js";
import { createHash } from "../helpers/password.js";
import { addProductToCartService } from "../services/userService.js";

export const addProductToCartController = async (req, res) => {
    try {
        const { idUser, idProduct } = req.params;
        const { quantity } = req.body;
        const response = await addProductToCartService(idUser, idProduct, quantity);
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Error al agregar producto al carrito" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const validatorFormPasswordController = async (req, res) => {
    try {
        const passwordMatch = await userLogin( req.body );
        if ( passwordMatch) {
            res.redirect('/api/view/formPasswordError');
        } else {
            const { email, password } = req.body;
            const newPassword = createHash(password);
            const userEmail = await getByEmail(email);
            if (userEmail) {
                console.log(userEmail.password);
                console.log(newPassword);
                userEmail.password = newPassword;
                await userEmail.save();
            }
            res.redirect('/api/view/formOk');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const changeRoleController = async (req, res) => {
    try {
        const { idU } = req.params;
        const user = await getById(idU);
        if (user) {
            if (user.role === 'premium') {
                user.role = 'user';
                await user.save();
                res.status(200).json({ message: "Rol cambiado a user" });
            } else {
                user.role = 'premium';
                await user.save();
                res.status(200).json({ message: "Rol cambiado a premium" });
            }
        } else {
            res.status(400).json({ message: "Error al cambiar rol" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}