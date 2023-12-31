const express = require("express");
const reviewsController = require("../controllers/reviews_controller");
const {
  addNewReviewValidation,
} = require("../middlewares/validators/add_review_validation");
const authVerification = require("../middlewares/auth");
const bookVerification = require("../middlewares/book");

const router = express.Router();

// @route     POST api/reviews
// @desc      add new review
// @access    Private
router.post(
  "/reviews",
  authVerification,
  bookVerification,
  addNewReviewValidation,
  reviewsController.addReview
);

module.exports = router;
