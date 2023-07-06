import { createHash, isValidPassword } from "../utils.js";
import { userModel } from "./models/userModel.js";

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
        const userExist = await userModel.findById(id)
        if(userExist){
         return userExist
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
        console.log(error)
        throw new Error(error)
    }     
}