const express = require("express");
const ws = require("ws");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, () => {
  console.log("server open");
});

// express와 웹 소켓서버 연결 -> 같은 port 공유
const wsServer = new ws.Server({ server: server });
const sockets = []; //client socket 저장 배열

wsServer.on("connection", (socket) => {
  console.log("클라이언트 연결완료");
  sockets.push(socket);

  // 연결된 소켓에서 메시지가 올 때 이벤트
  socket.on("message", (message) => {
    console.log("클라이언트에서 온 메시지 > ", message);

    // 웹 소켓 서버에 접속한 모든 클라이언트에게 메시지 전송 -> 브로드캐스팅
    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  socket.on("error", (error) => {
    console.log("error > ", error);
  });

  socket.on("close", () => {
    console.log("연결 종료");
  });
});
