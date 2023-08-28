import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    purchasedatetime: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    purcharse: {
        type: String,
        required: true,
    }
});

export const ticketModel = mongoose.model('tickets', ticketSchema);