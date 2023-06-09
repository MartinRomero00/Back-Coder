import { userModel } from "./models/userModel.js";

export const userLogin = async (email, password) => {
    try {
        const existUser = await userModel.find({email: email, password: password});
        if (existUser.length > 0) {
            return existUser[0];
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

export const userRegister = async (email, password) => {
    try {
        const existUser = await userModel.find({email: email});
        if (existUser.length === 0) {
            if (email === 'adminCoder@coder.com' && password === 'adminCod3r123')
                return await userModel.create({email: email, password: password, role: 'admin'});
            else
                return await userModel.create({email: email, password: password});
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}
