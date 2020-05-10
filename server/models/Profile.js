import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstName: {
        type: String
    },
    secondName: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    status: {
        type: String
    },
    social: {
        vk: {
            type: String
        },
        instagram: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        youtube: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model("profile", ProfileSchema);

export default Profile;