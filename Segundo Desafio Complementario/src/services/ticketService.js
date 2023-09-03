import { finishPurchase } from "../dao/mongoDB/ticketDao.js";

export const ticketService = async (idUser) => {
    try {
        return await finishPurchase(idUser);
    } catch (error) {
        console.log(error);
    }
}
