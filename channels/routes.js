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
    const updateChannel = async (req, res) => {
        const { channelId } = req.params;
        const status = await dao.updateChannel(channelId, req.body);
        res.json(status);
    }
    app.get("/api/channels", findAllChannels);
    app.get("/api/channels/:channelId", findChannelById);
    app.put("/api/channels/:channelId", updateChannel);
}
export default ChannelRoutes;