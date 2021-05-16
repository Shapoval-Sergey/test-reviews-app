"use strict";

const express = require("express");

const ReviewsController = require("../controllers/reviews");

const reviewsRouter = express.Router();

reviewsRouter.post("/", ReviewsController.createReview);

reviewsRouter.get("/", ReviewsController.fetchReviews);

module.exports = reviewsRouter;
