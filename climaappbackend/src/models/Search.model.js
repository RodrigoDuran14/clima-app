const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const SearchModel = mongoose.model("Search", searchSchema);
module.exports = SearchModel;
