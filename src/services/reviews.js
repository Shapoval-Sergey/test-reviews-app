"use strict";

const ReviewsRepo = require("../repository/reviews");

class ReviewsService {
  constructor() {
    this.repositories = {
      review: new ReviewsRepo(),
    };
  }

  async fetchReviews() {
    try {
      const result = await this.repositories.review.fetchReviews();
      return result;
    } catch (e) {
      next(e.message);
    }
  }

  async createReview({ name, descr }) {
    const newReview = await this.repositories.review.createNewReview({
      name,
      descr,
    });

    return newReview;
  }

  async getReviewById(id) {
    try {
      const result = await this.repositories.review.getReview(id);
      return result;
    } catch (e) {
      throw new Error("No review with such ID");
    }
  }
}

module.exports = ReviewsService;
