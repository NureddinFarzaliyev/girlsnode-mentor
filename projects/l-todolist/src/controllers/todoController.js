const { Todo } = require("../models/todoSchema");

const getAllTodos = async (req, res) => {
    try {
        const data = await Todo.find({})
        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getSingleTodo = async (req, res) => {
    try {
        const data = await Todo.findById(req.params.id)
        if(!data) {
            return res.status(404).json({ error: `Item with id ${req.params.id} not found.` })
        }
        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createTodo = async (req, res) => {
    try {
        const body = req.body;
        if (!body.description || !body.title) {
            return res.status(400).json({ error: "Body is invalid or some fields are missing." })
        }
        const newTodo = await Todo.create({ title: body.title, description: body.description })
        res.status(200).json({ data: newTodo })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateTodo = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;

        const todo = await Todo.findById(id)
        if(!todo) {
            return res.status(404).json({error: `Todo with id ${id} not found.`})
        }

        if (body.title) {
            todo.title = body.title;
        }

        if (body.description) {
            todo.description = body.description;
        }

        if (body.completed !== undefined && body.completed !== null) {
            todo.completed = body.completed;
        }

        const data = await todo.save()
        return res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({_id: req.params.id})
        if (!todo) {
            return res.status(404).json({error: `Todo with id ${req.params.id} not found.`})
        }
        res.status(200).json({ data: todo })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllTodos,
    getSingleTodo,
    createTodo,
    updateTodo,
    deleteTodo
}