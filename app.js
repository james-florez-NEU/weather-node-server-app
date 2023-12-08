import express from "express";
import session from "express-session";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import ChannelRoutes from "./channels/routes.js";
import Weather from "./weather/weather.js";

mongoose.connect(process.env.DB_CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
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
Weather(app);

app.listen(process.env.PORT || 4000);