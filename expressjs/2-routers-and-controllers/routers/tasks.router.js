const {
  getAllTasks,
  getTaskById,
  deleteTaskById,
} = require("../controllers/tasks.controller");

const express = require("express");
const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.delete("/:id", deleteTaskById);

module.exports = tasksRouter;
