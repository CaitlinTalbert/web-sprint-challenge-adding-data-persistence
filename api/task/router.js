const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {});

module.exports = router;
