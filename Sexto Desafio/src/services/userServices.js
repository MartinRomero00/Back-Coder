import { userRegister, userLogin } from "../dao/userDao.js";

export const registerService = async (user) => {
    try {
        return await userRegister(user);
    } catch (error) {
        console.log(error);
    }
}

export const loginService = async (user) => {
    try {
        return await userLogin(user);
    } catch (error) {
        console.log(error);
    }
}