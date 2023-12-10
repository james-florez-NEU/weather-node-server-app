import model from "./model.js";
export const findAllChannels = () => model.find();
export const findChannelById = (channelId) => model.findById(channelId);
export const updateChannel = (channelId, channel) => model.updateOne({ _id: channelId }, { $set: channel });