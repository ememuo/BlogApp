const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Post = require("./models/post");

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

//Route
app.get("/", (req, res) => {
  Post.find({}, (err, posts) => {
    res.render("index", { posts: posts });
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});

mongoose.connect("mongodb://localhost:27017/angels-blog");
