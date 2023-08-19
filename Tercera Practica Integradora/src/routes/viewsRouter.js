import { Router } from "express";
import { validatorFormPasswordController } from "../controllers/userController.js";

const viewsRouter = Router();

viewsRouter.get('/formulario', (req, res) => {
    res.render('formPassword');
});

viewsRouter.get('/formOk', (req, res) => {
    res.render('formOk');
});

viewsRouter.get('/formPasswordError', (req, res) => {
    res.render('formPasswordError');
});

viewsRouter.post('/reset', validatorFormPasswordController);

export default viewsRouter;