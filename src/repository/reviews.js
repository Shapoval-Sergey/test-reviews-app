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

  getReviews() {}

  getReview(id) {
    return this.model.findById({ _id: id });
  }
}

module.exports = ReviewsRepo;
