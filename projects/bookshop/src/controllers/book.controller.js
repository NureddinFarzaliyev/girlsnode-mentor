const { Book } = require("../models/book.model");

const getAllBooks = async (req, res) => {
  try {
    const findQuery = {};
    if (req.query.genre) {
      findQuery.genre = req.query.genre;
    }

    const minRating = req.query.minRating;
    const maxRating = req.query.maxRating;

    if (maxRating !== undefined || minRating !== undefined) {
      findQuery.rating = {};
      if (minRating !== undefined) {
        findQuery.rating.$gte = Number(minRating);
      }
      if (maxRating !== undefined) {
        findQuery.rating.$lte = Number(maxRating);
      }
    }

    const books = await Book.find(findQuery);
    res.json({ data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const createBook = async (req, res) => {
  try {
    const body = req.body;
    const newBook = await Book.create(body);
    res.status(201).json({ data: newBook });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error });
    } else {
      console.error(error);
      res.status(500).json({ error });
    }
  }
};

module.exports = { getAllBooks, createBook };
