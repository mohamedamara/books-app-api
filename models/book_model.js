const mongoose = require("mongoose");
const utils = require("../utils/utils");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    contentOverview: {
      type: String,
      required: true,
    },
    contentURL: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      default: "other",
    },
    language: {
      type: String,
      required: true,
    },
    numberOfPages: {
      type: Number,
      required: true,
    },
    publicationDate: {
      type: Date,
      default: Date.now,
    },
    rating: {
      type: mongoose.Types.Decimal128,
      default: 0,
      get: utils.formatRating,
    },
    id: false,
  },
  { toJSON: { getters: true } }
);

module.exports = mongoose.model("books", bookSchema);
