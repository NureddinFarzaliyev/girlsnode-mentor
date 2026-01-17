const getAllBooks = (req, res) => {
    res.json({ data: "books" })
}

const deleteBook = (req, res) => {
    res.json({data: "delete book"})
}

const putBook = (req, res) => {
    res.json({data: "put book", id: req.params.id})
}

module.exports = {
    getAllBooks,
    deleteBook,
    putBook
}