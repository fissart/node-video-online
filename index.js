var express = require("express");
var app = express();

var port = process.env.PORT || 30000;

app.get("/", function (req, res) {
  res.send("Helloww World");
});

app.listen(port);
