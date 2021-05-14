"use strict";

const express = require("express");

const ReviewsController = require("../controllers/reviews");

const reviewsRouter = express.Router();

reviewsRouter.post("/", ReviewsController.createReviews);

reviewsRouter.get("/", ReviewsController.fetchReviews);

reviewsRouter.get("/", ReviewsController.getReview);

module.exports = reviewsRouter;
