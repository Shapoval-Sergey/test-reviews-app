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
      const result = await this.repositories.review.getReviews();
      return result;
    } catch (e) {
      next(e);
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

module.exports = ReviewsRepo;
