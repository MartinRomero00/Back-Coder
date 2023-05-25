import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message: { type: String, required: true },
}); 

export const MessageModel = mongoose.model("messages", messageSchema);