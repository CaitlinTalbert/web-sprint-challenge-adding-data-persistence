const router = require("express").Router();
const Resource = require("./model");

router.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

//router.post("/", (req, res, next) => {});

module.exports = router;
