var http = require("http");
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

  var server = http.createServer(onRequest).listen(5000);
  console.log("5000");
}
exports.send = www;
