"use strict";

const ReviewsService = require("../services/reviews");
const { HttpCode } = require("../helpers/constants");

const reviewsService = new ReviewsService();

const createReview = async (req, res, next) => {
  const { body } = req;

  try {
    const newReview = await reviewsService.createReview(body);

    if (newReview) {
      const currentReview = await reviewsService.getReviewById(newReview._id);
      return res.status(HttpCode.CREATED).json({
        status: "success",
        code: HttpCode.CREATED,
        currentReview,
      });
    }
  } catch (e) {
    console.log(e.message);
    next(e.message);
  }
};

const fetchReviews = async (req, res, next) => {
  try {
    const reviews = await reviewsService.fetchReviews();
    return res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      reviews,
    });
  } catch (e) {
    console.log(e.message);
    next(e.message);
  }
};

module.exports = {
  createReview,
  fetchReviews,
};
