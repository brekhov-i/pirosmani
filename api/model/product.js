const { Schema } = require("mongoose");
const ReviewSchema = require("./review");

const product = new Schema({
  img: {
    type: String,
    required
  },
  title: {
    type: String,
    required
  },
  description: {
    type: String,
    required
  },
  previewText: {
    type: String,
    required
  },
  rating: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required
  },
  weight: {
    type: Number,
    required
  },
  reviews: [ReviewSchema]
});

module.exports = model("Product", product);
