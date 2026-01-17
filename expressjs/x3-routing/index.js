const express = require("express");
const { booksRouter } = require("./routers/booksRouter");
const { categoriesRouter } = require("./routers/categoryRouter");
const app = express()

app.use("/books", booksRouter) // books
app.use("/categories", categoriesRouter) // categories

const PORT = 3000;
app.listen(PORT, () => {
    console.log("start")
})