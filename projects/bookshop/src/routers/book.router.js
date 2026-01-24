const express = require("express");
const { getAllBooks, createBook } = require("../controllers/book.controller");

const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/", createBook);

module.exports = { bookRouter };
