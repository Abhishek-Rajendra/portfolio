// import express from "express";
// import path from "path";
// const app = express();

// var port = process.env.PORT || 4000;

// app.set("port", port);

// app.set("etag", "strong"); //browser caching of static assets should work properly
// //define all my services here
// app.use("/ping", (req, res) => res.send("pong"));

// //define the react-application here
// app.use("/portfolio", express.static(path.resolve(__dirname, `../build`))); //optionally one can add some route handler to protect this resource?
// app.get("/portfolio/*", (req, res) => {
//   //this is required to support any client side routing written in react.
//   res.sendFile(path.join(__dirname, "../build", "index.html"));
// });

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// app.listen(port, function () {
//   console.log("Example app listening on port " + port + "!");
// });

const express = require("express");
const app = express();
var path = require("path");
app.set("port", process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log("Calling app.listen().");

var server = app.listen(5000, function () {
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

console.log("app.listen() executed.");

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
