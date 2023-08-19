import { sendMail } from "../helpers/mailing.js";

export const sendMailController = async (req, res) => {
    try {
        const { email } = req.body;
        await sendMail(email);
        res.status(200).json({ message: "Email enviado" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
