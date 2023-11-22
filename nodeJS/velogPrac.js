const http = require("http");
const fs = require("fs");
const PORT = 8000;
const server = http.createServer(function (req, res) {
  try {
    const data = fs.readFileSync("file directory");
    res.writeHead(200);
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(404);
    res.write(error.message);
    res.end();
  }
});

server.listen(PORT, function () {
  console.log(`PORT 번호는 ${PORT} 입니다.`);
});
