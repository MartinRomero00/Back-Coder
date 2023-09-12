import { sendMail } from "../helpers/mailing.js";
import { getByEmail } from "../dao/mongoDB/userDao.js";


export const sendMailController = async (req, res) => {
    try {
        const { email } = req.body;
        const token = await getByEmail(email);
        const time = new Date().getTime() + 3600000;
        await sendMail(email, token._id, time);
        res.status(200).json({ message: "Email enviado" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
