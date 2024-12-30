const Post = require("./models/post");

app.post("/addpost", (req, res) => {
  const postData = new Post(req.body);
  postData
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(400).send("Unable to save data");
    });
});
