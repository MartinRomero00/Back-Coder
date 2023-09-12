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

viewsRouter.get('/formAgain', (req, res) => {
    res.render('formAgain');
});

viewsRouter.post('/reset', validatorFormPasswordController);

viewsRouter.get('/uploadDocuments/:uid', (req, res) => {
    res.render('uploadDocs');
});

export default viewsRouter;