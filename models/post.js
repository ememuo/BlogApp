const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  body: String,
});

Post = mongoose.model("Post", postSchema);
