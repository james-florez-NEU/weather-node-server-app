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


    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/newest", findNewestReviews);
}
export default ReviewRoutes;