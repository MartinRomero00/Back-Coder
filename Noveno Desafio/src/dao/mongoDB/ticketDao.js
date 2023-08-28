import { ticketModel } from "./models/ticketModel.js";
import { generateRandomCode } from "../../helpers/randomcode.js"
import { showArgentinaDateTime } from "../../helpers/gettime.js"
import { userModel } from "./models/userModel.js";


export const finishPurchase = async ( idUser ) => {
    try {
        const code = generateRandomCode();
        const purchasedatetime = showArgentinaDateTime();
        const userExist = await userModel.findById(idUser);
        if (userExist) {
            let amount = userExist.cart.reduce((total, product) => total + (product.price * product.quantity), 0);

            const ticket = await ticketModel.create({ code, purchasedatetime, amount, purcharse: userExist.email });
            return ticket;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}