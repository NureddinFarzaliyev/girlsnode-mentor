const demoTasks = require("../db/tasks");

const getAllTasks = (req, res) => {
  res.json(demoTasks);
};

const getTaskById = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = demoTasks.find((t) => t.id == taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const deleteTaskById = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const taskIndex = demoTasks.findIndex((t) => t.id === taskId);
  if (taskIndex !== -1) {
    demoTasks.splice(taskIndex, 1);
    res.json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  deleteTaskById,
};
