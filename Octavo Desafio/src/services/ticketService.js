import { finishPurchase } from "../dao/mongoDB/ticketDao.js";
import { logger } from "../helpers/logger.js";

export const ticketService = async (idUser) => {
    try {
        return await finishPurchase(idUser);
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
}
