import express from "express";
import session from "express-session";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import ChannelRoutes from "./channels/routes.js";
import Weather from "./weather/weather.js";
import ReviewRoutes from "./reviews/routes.js";

mongoose.connect(process.env.DB_CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(
    session(sessionOptions)
);
app.use(express.json());

UserRoutes(app);
ChannelRoutes(app);
ReviewRoutes(app);
Weather(app);

app.listen(process.env.PORT || 4000);