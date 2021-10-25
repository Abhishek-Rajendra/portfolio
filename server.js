const express = require("express");
const app = express();
var path = require("path");

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
