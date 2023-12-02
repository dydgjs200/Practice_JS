// ES 6 문법 사용강조
"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
// dirname = 현재 위치(app의 위치)
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

// 실행 시 node ./bin/www 로 접근해야함 -> listen 모듈화
// package.json에 "start": "nodemon ./bin/www.js", 명령어 추가 해서 npm start로 사용가능
module.exports = app;
