const express = require("express");
const server = express();
server.use(express.json());

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
    id: 88,
    task: "sleep",
    checked: false,
  },
];

server.get("/tests", function (req, res) {
  res.send(tests);
});
server.post("/tests", function (req, res) {
  console.log(req.body.task);
  tests.push({
    id: tests.length + 1,
    task: req.body.task,
    checked: false,
  });
  res.send(tests);
});

server.delete("/rem/:id", function (req, res) {
  //console.log(req.params.id);
  const foundIndex = tests.findIndex(
    (test) => test.id === parseInt(req.params.id)
  );

  if (foundIndex === -1) {
    res.status(404).send({
      error: "index not found",
    });
  } else {
    tests.splice(foundIndex, 1);
    res.send(tests);
  }
});
//server.put();

server.listen(1234, function () {
  console.log("your server is now listening on http://localhost:1234");
});
