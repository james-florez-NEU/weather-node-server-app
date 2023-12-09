import model from "./model.js";
export const findAllChannels = () => model.find();
export const findChannelById = (channelId) => model.findById(channelId);