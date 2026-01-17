const { Todo } = require("../models/todo.model");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ data: todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id }); // todos/7
    if (!todo) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ data: todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const body = req.body;

    if (!body.title || !body.description) {
      return res.status(400).json({ error: "Incomplete body content" });
    }

    const todo = await Todo.create({
      title: body.title,
      description: body.description,
    });

    res.status(201).json({ data: todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const body = req.body;

    const todo = await Todo.findOne({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (body.completed !== null || body.completed !== undefined) {
      todo.completed = body.completed;
    }

    if (body.title) {
      todo.title = body.title;
    }

    if (body.description) {
      todo.description = body.description;
    }

    const result = await todo.save();
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id });
    if (!todo) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTodo, getTodos, getTodo, updateTodo, deleteTodo };
