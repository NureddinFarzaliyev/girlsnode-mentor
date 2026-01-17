const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.get("/", getTodos); // GET /todos
todoRouter.get("/:id", getTodo); // GET /todos/2
todoRouter.put("/:id", updateTodo);
todoRouter.post("/", createTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
