var express = require("express");
var app = express();

function www() {
  function onRequest(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var ww = [
      '<html lang="en">',
      "<head>",
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      "<title>Document</title>",
      "</head>",
      "<body>",
      "www zzzzzzzzzzzzzz",
      "</body>",
      "</html>",
    ];

    res.write(ww.join(""));
    res.end();
  }

  var port = process.env.PORT || 3000;

  app.get("/", function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var ww = [
      '<html lang="en">',
      "<head>",
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      "<title>Document</title>",
      "</head>",
      "<body>",
      "www zzzzzzzzzzzzzz",
      "</body>",
      "</html>",
    ];

    res.write(ww.join(""));
    res.end();
  });

  app.listen(port);
}
exports.send = www;
