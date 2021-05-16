"use strict";

const ReviewsService = require("../services/reviews");
const { HttpCode } = require("../helpers/constants");

const reviewsService = new ReviewsService();

const createReview = async (req, res, next) => {
  const { body } = req;

  try {
    const result = await reviewsService.createNewReview(body);
    res.status(HttpCode.CREATED).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const fetchReviews = async (req, res, next) => {
  try {
    const result = await reviewsService.getReviews();
    res.status(HttpCode.OK).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  createReview,
  fetchReviews,
};
