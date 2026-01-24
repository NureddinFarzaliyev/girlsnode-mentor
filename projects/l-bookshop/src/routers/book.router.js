const express = require("express")
const { getBooks, createBook } = require("../controllers/book.controller")
const bookRouter = express.Router()

bookRouter.get("/", getBooks) // GET /books
bookRouter.post("/", createBook) // POST /books
 
module.exports = { bookRouter }