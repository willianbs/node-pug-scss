const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));

const server = app.listen(3333, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "World!"
  });
});
