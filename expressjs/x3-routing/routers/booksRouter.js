const express = require("express")
const { getAllBooks, deleteBook, putBook } = require("../controllers/booksController")

const booksRouter = express.Router()

// /books

booksRouter.get("/", getAllBooks) // GET /books/
booksRouter.delete("/newbook", deleteBook) // DELETE /books/newbook
booksRouter.put("/:id", putBook) // PUT /books/3

module.exports = {
    booksRouter
}