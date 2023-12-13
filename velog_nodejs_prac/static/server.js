function say() {
  const socket = io.connect();

  socket.on("connect", () => {
    console.log("클라이언트 연결 완료 > ", socket.id);
  });

  socket.emit("hello", { who: "client", msg: "hello" });

  socket.on("helloKR", (data) => {
    document.getElementById(
      "server_result"
    ).textContent = `${data.who} : ${data.msg}`;
  });
}
