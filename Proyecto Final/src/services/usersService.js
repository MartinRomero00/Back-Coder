import { getAll, deleteUser } from "../dao/mongoDB/userDao.js";

export const getAllService = async () => {
    try {
        return await getAll();
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteAllService = async (usersToDelete) => {
    try {
        return await deleteUser(usersToDelete);
    } catch (error) {
        throw new Error(error);
    }
}