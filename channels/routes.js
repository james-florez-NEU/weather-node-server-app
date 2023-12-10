import * as dao from "./dao.js";
function ChannelRoutes(app) {
    const findAllChannels = async (req, res) => {
        const channels = await dao.findAllChannels();
        res.json(channels);
    };
    const findChannelById = async (req, res) => {
        const channel = await dao.findChannelById(req.params.channelId);
        res.json(channel);
    }
    app.get("/api/channels", findAllChannels);
    app.get("/api/channels/:channelId", findChannelById);
}
export default ChannelRoutes;