const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
// express 앱으로 http 서버를 생성
const server = http.createServer(app);
// socket.io를 http 서버에 연결
const io = socketIO(server);
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("chat");
});

// io.on( ) : socket 관련한 통신 작업을 처리
io.on("connection", (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공

  // socket.id : 소켓 고유 아이디 (브라우저 탭 단위)
  console.log("서버 연결 완료 >", socket.id);

  // [실습1]
  socket.on("hello", (data) => {
    // console.log(data.who, data.msg); //client hello
    console.log(`${data.who} : ${data.msg}`);

    socket.emit("helloKR", { who: "hello", msg: "안녕!" });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
