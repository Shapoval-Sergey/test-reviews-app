"use strict";

const ReviewsService = require("../services/reviews");
const { HttpCode } = require("../helpers/constants");

const reviewsService = new ReviewsService();

const createReview = async (req, res, next) => {
  const { body } = req;

  try {
    const review = await reviewsService.createReview(body);

    if (review) {
      return res.status(HttpCode.OK).json({
        status: "success",
        code: HttpCode.OK,
        review,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const fetchReviews = async (req, res, next) => {
  try {
    const reviews = await reviewsService.fetchReviews();
    res.status(HttpCode.OK).json(reviews);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

// const getReview = async (req, res, next) => {
//   try {
//     const review = await reviewsService.createReview(body);
//     const currentReview = await reviewsService.getReviewById(review._id);
//     const reviews = await reviewsService.fetchReviews();
//     res.status(HttpCode.OK).json(reviews);
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// };

module.exports = {
  createReview,
  fetchReviews,
  // getReview,
};
