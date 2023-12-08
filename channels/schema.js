import mongoose from "mongoose";
const channelSchema = new mongoose.Schema({
        name: { type: String, required: true},
        description: String,
        location_id: Number,
        city: String,
        region: String,
        country: String,
    },
    { collection: "channels" });
export default channelSchema;