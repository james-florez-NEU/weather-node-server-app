import * as dao from "./dao.js";
function ChannelRoutes(app) {
    const findAllChannels = async (req, res) => {
        const channels = await dao.findAllChannels();
        res.json(channels);
    };

    app.get("/api/channels", findAllChannels);
}
export default ChannelRoutes;