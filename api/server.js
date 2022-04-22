const express = require("express");

//routers to api here
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

//servers here for apis
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.use("*", (req, res, next) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something has gone wrong",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
