const express = require("express");
const server = express();

const tests = [
  {
    id: 1,
    task: "procrastinate",
    checked: false,
  },
  {
    id: 2,
    task: "eat",
    checked: true,
  },
  {
    id: 3,
    task: "sleep",
    checked: false,
  },
];

server.get("/tests", function (req, res) {
  res.send(tests);
});
//server.post();
//server.put();
//server.delete();

server.listen(1234, function () {
  console.log("your server is now listening on http://localhost:1234");
});
