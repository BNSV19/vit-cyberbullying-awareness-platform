const express = require("express");
const mongo = require("./mongo");
var story = require("./story");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/stories", async (req, res) => {
  await mongo().then(async (mongoose) => {
    let stories = await story.find({});
    console.log(stories);
    res.json(stories);
    mongoose.connection.close();
  });
});

app.post("/story", async ({ body }, res) => {
  await mongo().then(async (mongoose) => {
    store = new story(body);
    store.save();
    console.log(store);
    res.send("ok");
  });
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
app.use(express.static("public"));
