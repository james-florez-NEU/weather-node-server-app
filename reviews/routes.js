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

    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/newest", findNewestReviews);
    app.get("/api/reviews/:reviewId", findReviewById);
}
export default ReviewRoutes;