const { Schema, model } = require("mongoose");

const review = new Schema({
  user: {
    type: String,
    required
  },
  text: {
    type: String,
    required
  }
});

module.exports = model("Review", review);
