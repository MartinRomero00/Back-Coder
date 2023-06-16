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
      isGithub: {
        type: Boolean,
        default: false,
        required: true
      },
});

export const userModel = mongoose.model('users', userSchema);