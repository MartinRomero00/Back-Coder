import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        },
    last_name: {
        type: String,
        required: true,
        },
    email: {
        type: String,
        required: true,
        unique: true,
        },
    age: {
        type: Number,
        required: true,
        default: 0
        },
    password: {
        type: String,
        required: true,
        },
    role: {
        type: String,
        default: 'user'
        },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cart',
            default: []
        }
    ],
    isGithub: {
        type: Boolean,
        default: false, 
        required: true
        }
});

userSchema.pre('find', function() {
    this.populate('carts');
});

export const userModel = mongoose.model('users', userSchema);