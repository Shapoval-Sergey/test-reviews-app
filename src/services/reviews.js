"use strict";

const ReviewsRepo = require("../repository/reviews");

class ReviewsService {
  constructor() {
    this.repositories = {
      review: new ReviewsRepo(),
    };
  }

  async getReviews() {
    try {
    } catch (error) {}
  }

  async getReview() {
    try {
    } catch (error) {}
  }

  async createReview() {
    try {
    } catch (error) {}
  }
}

module.exports = ReviewsRepo;
