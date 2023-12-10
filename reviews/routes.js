import * as dao from "./dao.js";
function ReviewRoutes(app) {
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };
    const findNewestReviews = async (req, res) => {
        const reviews = await dao.findNewestReviews();
        res.json(reviews);
    };
    const findReviewById = async (req, res) => {
        const review = await dao.findReviewById(req.params.reviewId);
        res.json(review);
    }
    const createReview = async (req, res) => {
        const review = await dao.createReview(req.body);
        res.json(review);
    }
    const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.reviewId);
        res.json(status);
    }

    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/newest", findNewestReviews);
    app.get("/api/reviews/:reviewId", findReviewById);
    app.post("/api/reviews/create", createReview);
    app.delete("/api/reviews/:reviewId", deleteReview);
}
export default ReviewRoutes;