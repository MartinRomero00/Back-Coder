import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    carrito: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product2",
            default: []
        }
    ]
});

cartSchema.pre("find", function(){
    this.populate("carrito")
} )

export const cartModel = mongoose.model("cart2", cartSchema);