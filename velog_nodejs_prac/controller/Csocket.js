module.exports = function (io) {
  io.on("connection", function (socket) {
    console.log("A user connected");

    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });

    socket.on("hello", function (msg) {
      io.emit("helloKR", msg);
    });
  });
};
