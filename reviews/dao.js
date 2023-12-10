import model from "./model.js";
export const findAllReviews = () => model.find();
export const findNewestReviews = () => model.find().sort({ date: -1 }).limit(3);
export const findReviewById = (reviewId) => model.findById(reviewId);
export const createReview = (review) => model.create(review);
export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });
export const updateReview = (reviewId, review) => model.updateOne({ _id: reviewId }, { $set: review });