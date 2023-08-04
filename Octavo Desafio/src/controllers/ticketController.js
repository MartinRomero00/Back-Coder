import { ticketService } from "../services/ticketService.js";
import { logger } from "../helpers/logger.js";

export const finishPurchaseController = async (req, res) => {
    try {
        const { idUser } = req.params;
        const ticket = await ticketService(idUser);
        if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(400).json({ message: "Error al crear el ticket" });
        }
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}