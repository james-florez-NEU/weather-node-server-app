import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: String,
        email: String,
        lastName: String,
        dob: Date,
        role: {
            type: String,
            enum: ["USER", "FORECASTER", "MODERATOR"],
            default: "USER" },
        favorites: [String],
        favoriteChannels: [String],
    },
    { collection: "users" });
export default userSchema;

