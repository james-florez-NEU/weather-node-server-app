import axios from "axios";
import "dotenv/config";

const WEATHER_API_BASE = process.env.WEATHER_API_BASE;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const Weather = (app) => {
    app.get('/api/weather/current/:id', async (req, res) => {
        const { id } = req.params;
        const api_string = WEATHER_API_BASE + 'current.json?key=' + WEATHER_API_KEY + '&q=id:' + id;
        try {
            const response = await axios.get(api_string);
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: "current error"});
        }
    });
    app.get('/api/weather/search/:key', async (req, res) => {
        const { key } = req.params;
        const api_string = WEATHER_API_BASE + 'search.json?key=' + WEATHER_API_KEY + '&q=' + key;
        try {
            const response = await axios.get(api_string);
            const weatherData = response.data;
            res.json(weatherData);
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    });
};
export default Weather;