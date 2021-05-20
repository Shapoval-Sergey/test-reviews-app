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

  fetchReviews() {
    return this.model.find().sort({ createdAt: -1 });
  }

  // getReview(id) {
  //   return this.model.findById({ _id: id });
  // }
}

module.exports = ReviewsRepo;
