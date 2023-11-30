const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 등록
const registerRouter = require("./routes/register");
app.use("/", registerRouter);

app.listen(PORT, (req, res) => {
  console.log("server OPen");
});
