import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
        user_id: String,
        channel_id: String,
        rating: Number,
        message: String,
        flaggedForModeration: Boolean,
    },
    { collection: "reviews" });
export default reviewSchema;