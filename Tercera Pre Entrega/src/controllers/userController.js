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
