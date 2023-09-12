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
            const { password, token, time } = req.body;
            const tokenExpiration = parseInt(time);
            const now = new Date().getTime();
            if ( now > tokenExpiration){
               return res.redirect('/api/view/formAgain');
            }else{
                const passwordMatch = await getById(token);
                const { email } = passwordMatch;
                const user = { email, password };
                    const passwordMatch2 = await userLogin( user);
                    if ( passwordMatch2) {
                       return res.redirect('/api/view/formPasswordError?token='+token+'&time='+time+'');
                    } else {
                        const newPassword = createHash(password);
                        const userEmail = await getByEmail(email);
                        if (userEmail) {
                            userEmail.password = newPassword;
                            await userEmail.save();
                        }
                    }
                return res.redirect('/api/view/formOk');
            }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// export const changeRoleController = async (req, res) => {
//     try {
//         const { idU } = req.params;
//         const user = await getById(idU);
//         if (user) {
//             if (user.role === 'premium') {
//                 user.role = 'user';
//                 await user.save();
//                 res.status(200).json({ message: "Rol cambiado a user" });
//             } else {
//                 user.role = 'premium';
//                 await user.save();
//                 res.status(200).json({ message: "Rol cambiado a premium" });
//             }
//         } else {
//             res.status(400).json({ message: "Error al cambiar rol" });
//         }
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }


export const changeRoleController = async (req, res) => {
    try {
        const { idU } = req.params;
        const user = await getById(idU);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.role === 'premium') {
            user.role = 'user';
            await user.save();
            res.status(200).json({ message: "Rol cambiado a user" });
        } else {
            const requiredDocuments = [ 'Identificacion', 'Comprobante de domicilio', 'Comprobante de estado de cuenta' ];
            if (!requiredDocuments.every( document => user.documents.some( doc => doc.name.startsWith(document) ) )) {
                return res.status(400).json({ message: "Faltan documentos" });
            }
            user.role = 'premium';
            await user.save();
            res.status(200).json({ message: "Rol cambiado a premium" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}