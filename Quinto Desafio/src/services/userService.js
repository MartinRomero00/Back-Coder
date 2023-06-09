import { userLogin, userRegister } from "../dao/userDao.js";

export const userLoginService = async (email, password) => {
    try {
        return await userLogin(email, password);
    } catch (error) {
        console.log(error);
    }
}

export const userRegisterService = async (email, password) => {
    try {
        return await userRegister(email, password);
    } catch (error) {
        console.log(error);
    }
}