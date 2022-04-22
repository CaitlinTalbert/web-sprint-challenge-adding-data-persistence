const router = require("express").Router();
const Project = require("./model");

//returns all projects
router.get("/", (req, res, next) => {
  Project.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

//posts a new project
router.post("/", (req, res, next) => {
  Project.addProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

module.exports = router;
