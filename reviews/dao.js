import model from "./model.js";
export const findAllReviews = () => model.find();
export const findNewestReviews = () => model.find().sort({ date: -1 }).limit(2);
export const findReviewById = (reviewId) => model.findById(reviewId);