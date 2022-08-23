const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    releaseYear: { type: Number, default: 2000 },
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
