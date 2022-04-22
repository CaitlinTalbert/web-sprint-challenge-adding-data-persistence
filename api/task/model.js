const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "p.project_name",
      "p.project_description",
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed"
    );
  return tasks.map((task) => ({
    ...task,
    task_completed: !!task.task_completed,
  }));
}

module.exports = { getTasks };
