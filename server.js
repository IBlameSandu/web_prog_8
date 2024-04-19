const express = require("express");
const server = express();

server.get("/test", function () {
  console.log("working");
});
//server.post();
//server.put();
//server.delete();

server.listen(1234, function () {
  console.log(" 🤓 your server is now listening on http://localhost:1234");
});
