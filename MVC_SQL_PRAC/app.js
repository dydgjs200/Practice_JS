const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter);

// 오류 페이지
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log("Server open");
});
