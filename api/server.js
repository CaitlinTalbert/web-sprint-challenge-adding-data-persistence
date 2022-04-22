const express = require("express");

//routers to api here

const server = express();

server.use(express.json());

//servers here for apis

server.use("*", (req, res, next) => {
  res.json({ api: "up" });
});

module.exports = server;
