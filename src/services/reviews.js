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
    const newProject = await this.repositories.review.createNewReview({
      name,
      descr,
    });
    return newProject;
  }
}

module.exports = ReviewsService;
