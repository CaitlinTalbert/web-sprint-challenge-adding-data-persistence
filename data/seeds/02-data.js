const projects = [
  {
    project_name: "portfolio website",
    project_description: "showcase my skills",
    project_completed: false,
  },
  {
    project_name: "water my plants reminder website",
    project_description: "reminds you when to water your plants",
    project_completed: false,
  },
  {
    project_name: "get jacked",
    project_description: "workin on my fitness",
    project_completed: true,
  },
];

const resources = [
  {
    resource_name: "youTube",
    resource_description: "programming tutorials",
  },
  {
    resource_name: "google",
    resource_description: "how to do everything",
  },
  {
    resource_name: "my brain",
    resource_description: "my extensive knowledge of fitness",
  },
];

const tasks = [
  {
    task_description: "make contact me functional",
    task_notes: "research how to make contact me section functional",
    task_completed: false,
    project_id: 1,
  },
  {
    task_description: "complete login/register",
    task_notes: "research how to make login/register dynamic",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "continue to lift weights",
    task_notes: "dont forget the cardio",
    task_completed: true,
    project_id: 3,
  },
];

const project_resources = [
  {
    project_id: 1,
    resource_id: 1,
  },
  {
    project_id: 2,
    resource_id: 2,
  },
  {
    project_id: 3,
    resource_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
