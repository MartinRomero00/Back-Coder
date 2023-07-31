import { createHash, isValidPassword } from "../../helpers/password.js";
import { userModel } from "./models/userModel.js";
import { getByIdProduct } from "./productDao.js";

export const userLogin = async (user) => {
    try {
        const { email, password } = user;
        const existUser = await userModel.findOne({email});
        if (existUser) {
            const passwordMatch = isValidPassword(password, existUser);
            if (passwordMatch) {
                return existUser;
            }else{
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }   
}

export const userRegister = async (user) => {
    try {
        const { first_name, last_name, email, age, password,role } = user;
        const userExist = await userModel.find({ email });
        if (userExist.length === 0) {
           return await userModel.create({ ...user, password: createHash(password) });
        }else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

export const getById = async (id) =>{
    try {
        const userExist = await userModel.findById(id);
        if(userExist){
         return userExist;
        } return false
    } catch (error) {
        console.log(error)
    }
}

export const getByEmail = async (email) =>{
    try {
        const userExist = await userModel.findOne({email});
        if(userExist){
        return userExist
        } return false
    } catch (error) {
        throw new Error(error)
    }     
}

export const addProductToCart = async (idUser, idProduct, quantity) => {
    try {
        const userExist = await userModel.findById(idUser);
        if(userExist){
            const productExist = await getByIdProduct(idProduct);
            if(productExist){
                const idProductString = idProduct.toString();
                let productFound = false;
                for (const product of userExist.cart){
                    if(product._id.toString() === idProductString){
                        product.quantity = product.quantity + quantity;
                        productFound = true;
                        await userExist.save();
                        return userExist.cart;
                    }
                }
                if (!productFound){
                    const {_id ,name, description, price, stock} = productExist;
                    if(stock < quantity){
                        throw new Error("No hay stock suficiente");
                    }else{
                        productExist.stock = productExist.stock - quantity;
                        userExist.cart.push({productId: _id ,name, description, price, quantity});
                        await userExist.save();
                        return userExist.cart;   
                    } 
                }
            }else{
                throw new Error("El producto no existe");
            }
        }else{
            throw new Error("El usuario no existe");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}