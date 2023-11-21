const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  // req = 클라이언트가 서버로 보내는 요청
  // res = 서버에서 클라이언트로 보내는 응답
  // res.writeHead(200);
  // res.write("<h1>hello</h1>");
  // res.end("<p>end</p>"); // end가 없을 시 계속 통신함

  // 예외처리 필요
  try {
    const data = fs.readFileSync("./httpPrac55.html");
    res.writeHead(200);
    res.write(data);
    res.end("<p>end</p>");
  } catch (error) {
    const data2 = fs.readFileSync("./404.html");
    res.write(data2);
    console.log(error);
  }
});

const PORT = 8000;

// // request 이벤트 = 클라이언트 요청
// server.on("request", function (req, res) {
//   console.log("request", req.url);
// });

// //connection 이벤트 = 클라이언트가 접속했을 때
// server.on("connection", function (req, res) {
//   console.log("connection");
// });

server.listen(8000, function () {
  console.log("server open");
});

// setTimeout(() => {
//   console.log("서버 종료");
//   server.close();
// }, 4000);
