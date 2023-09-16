import { getByIdProduct } from "../dao/mongoDB/productDao.js";
import { getById } from "../dao/mongoDB/userDao.js";
import { getAllService, getByIdService, createProductService, updateProductService, deleteProductService } from "../services/productService.js";
import transporter from "../helpers/mailing.js";
import config from "../config/config.js";

export const getAllController = async (req, res) => {
    try {
        const products = await getAllService();
        res.json(products);
    } catch (error) {
    }
}

export const getByIdController = async (req, res) => {
    try {
        const product = await getByIdService(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

export const createProductController = async (req, res) => {
    try {
        const user = await getById(req.session.passport.user);
        if (user.role === "premium"){
            const product = await createProductService({ ...req.body, owner: user._id});
            res.json(product);
        }else if(user.role === "admin"){
            const product = await createProductService(req.body);
            res.json(product);
        }else{
            res.json({message: "You are not authorized to create a product"});
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateProductController = async (req, res) => {
    try {
        const user = await getById(req.session.passport.user);
        const product = await getByIdProduct(req.params.id);
        if (user.role === "premium" && product.owner === user._id.toString()){
            const product = await updateProductService(req.params.id, req.body);
            res.json(product);
        }else if(user.role === "admin"){
            const product = await updateProductService(req.params.id, req.body);
            res.json(product);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteProductController = async (req, res) => {
    try {
        const user = await getById(req.session.passport.user);
        const product = await getByIdProduct(req.params.id);
        if (user.role === 'premium' && product.owner === user._id.toString()){
            const productDelet = await deleteProductService(req.params.id);
            const mailOptions = {
                from: config.mail,
                to: user.email,
                subject: "Product deleted",
                html: `<h1>Product deleted</h1>
                <p>Product ${productDelet.name} has been deleted</p>`
            }
            transporter.sendMail(mailOptions);
            res.json({message: "Product deleted successfully"});
        }else if(user.role === "admin"){
            await deleteProductService(req.params.id);
            res.json({message: "Product deleted successfully"});
        }
    } catch (error) {
        console.log(error);
    }
}