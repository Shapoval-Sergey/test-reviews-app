"use strict";

const express = require("express");

const ReviewsController = require("../controllers/reviews");
const { validateCreateReview } = require("../validation/reviews");

const reviewsRouter = express.Router();

reviewsRouter.post("/", validateCreateReview, ReviewsController.createReview);

reviewsRouter.get("/", ReviewsController.fetchReviews);

module.exports = reviewsRouter;
