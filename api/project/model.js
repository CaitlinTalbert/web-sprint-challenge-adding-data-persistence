const db = require("../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  return projects.map((project) => ({
    ...project,
    project_completed: !!project.project_completed,
  }));
}

async function addProject() {}

module.exports = {
  getAll,
  addProject,
};
