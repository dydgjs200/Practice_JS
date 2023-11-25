const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  const data = { id: "dd", password: "1234" };
  res.render("index", { data: data });
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});
app.post("/ajax", function (req, res) {
  res.send(req.body);
});

// axios server
app.get("/axios", function (req, res) {
  res.json(req.query);
});
app.post("/axios", function (req, res) {
  res.send(req.body);
});

// fetch server
app.get("/fetch", function (req, res) {
  res.send(req.query);
});

app.listen(PORT, function (req, res) {
  console.log(`server open PORT : ${PORT}`);
});

app.post("/Assignment_Ajax", function (req, res) {
  res.send(req.body);
});
