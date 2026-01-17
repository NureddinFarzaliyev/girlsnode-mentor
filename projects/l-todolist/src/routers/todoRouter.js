const express = require("express")
const { getAllTodos, createTodo, getSingleTodo, updateTodo, deleteTodo } = require("../controllers/todoController")

const todoRouter = express.Router()

todoRouter.get("/", getAllTodos)
todoRouter.get("/:id", getSingleTodo)
todoRouter.post("/", createTodo)
todoRouter.patch("/:id", updateTodo)
todoRouter.delete("/:id", deleteTodo)

module.exports = todoRouter