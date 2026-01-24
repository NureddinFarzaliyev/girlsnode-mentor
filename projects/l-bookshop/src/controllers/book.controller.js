const { Book } = require("../models/book.model");

const getBooks = async (req, res) => {
    try {
        const filter = {}

        // filter by genre
        if(req.query.genre !== undefined){
            filter.genre = req.query.genre
        }

        // filter by rating
        if(req.query.minRating !== undefined || req.query.maxRating !== undefined) {
            const ratingFilter = {}

            // { $gte: 2, $lte: 5 }

            if(req.query.minRating !== undefined) {
                ratingFilter.$gte = req.query.minRating
            }
            if(req.query.maxRating !== undefined) {
                ratingFilter.$lte = req.query.maxRating
            }

            filter.rating = ratingFilter
        }

        // fetch by filter
        const books = await Book.find(filter)

        // send response
        res.json({ data: books })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Unexpected error" })
    }
}

const createBook = async (req,res) => {
    try {
        const body = req.body;
        const newBook = await Book.create(body)
        res.status(201).json({ data: newBook })
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ error })
        } else {
            console.log(error)
            res.status(500).json({ error: "Unexpected error" })
        }
    }
}

module.exports = {
    getBooks,
    createBook
}