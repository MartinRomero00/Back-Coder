import { Router } from "express";
import passport from "passport";
import { registerResponse, loginResponse } from "../controllers/localController.js";
import { addProductToCartController } from "../controllers/userController.js";
import { authCompra } from "../middlewares/authCompra.js";
import { changeRoleController } from "../controllers/userController.js";
import multer from "multer";
import { getById } from "../dao/mongoDB/userDao.js";

const localRouter = Router();

localRouter.post('/register', passport.authenticate('signup'), registerResponse);

localRouter.post('/login', passport.authenticate('login'), loginResponse);

localRouter.post('/addProductToCart/:idUser/:idProduct', authCompra, addProductToCartController);

localRouter.post('/premium/:idU', changeRoleController);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let destFolder = './src/public/documents';

        if (file.fieldname === 'profileImage'){
            destFolder = './src/public/profiles';
        }else if (file.fieldname === 'productImage'){
            destFolder = './src/public/products';
        }
        cb(null, destFolder);
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});

const upload = multer({ storage: storage });

const post = [
    {
        name: 'profileImage'
    },
    {
        name: 'productImage'
    },
    {
        name: 'documents',
        maxCount: 3
    }
]

localRouter.post('/:uid/documents', upload.fields(post), async (req, res) => {
    try {
        const { uid } = req.params;
        const uploadedFiles = req.files;
        const user = await getById(uid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.documentStatus = 'Documentación cargada';
        const documents = [];
        for (const fieldName in uploadedFiles) {
            const files = uploadedFiles[fieldName];
            for (const file of files) {
                documents.push({
                    name: file.originalname,
                    reference: file.filename && file.path
                });
            }
        }
        user.documents = documents;
        await user.save();
        res.status(200).json({ message: "Documentos subidos exitosamente" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


export default localRouter;