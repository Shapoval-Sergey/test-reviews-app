"use strict";

const Review = require("../schemas/review");

class ReviewsRepo {
  constructor() {
    this.model = Review;
  }

  createNewReview({ name, descr }) {
    return new this.model({
      name,
      descr,
    }).save();
  }

  getReviews() {
    return this.model.find({});
  }
}

module.exports = ReviewsRepo;
