import { Router } from "express";
import { sendMailController } from "../controllers/mailingController.js";

const mailPassReset = Router();

mailPassReset.post('/', sendMailController);

export default mailPassReset;