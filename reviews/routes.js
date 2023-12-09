import * as dao from "./dao.js";
function ReviewRoutes(app) {
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };

    app.get("/api/reviews", findAllReviews);
}
export default ReviewRoutes;