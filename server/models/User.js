import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: { 
        type: Boolean,
        default: false 
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

export default User;