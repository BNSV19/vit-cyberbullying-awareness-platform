const mongoose = require("mongoose");
const storySchema = new mongoose.Schema({
  author: String,
  date: String,
  story: String,
});
module.exports = mongoose.model("Story", storySchema);
