import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("channels", schema);
export default model;