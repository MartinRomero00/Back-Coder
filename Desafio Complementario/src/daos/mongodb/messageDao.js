import { MessageModel } from "./models/messageModel.js";

export const addMessage = async (msg) => {
    try {
        return await MessageModel.create({message: msg});
    } catch (error) {
        console.log(error);
    }
}