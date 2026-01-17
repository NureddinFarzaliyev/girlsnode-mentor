const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.post("/", createTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
