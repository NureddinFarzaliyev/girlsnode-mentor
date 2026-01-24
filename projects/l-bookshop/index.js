const dotenv = require("dotenv")
dotenv.config()

const express = require('express')
const { connectDB } = require("./src/db/connect")
const { bookRouter } = require("./src/routers/book.router")

const app = express()
app.use(express.json())

// /books
app.use("/books", bookRouter)

app.listen(3000, () => {
    console.log("App is ready on 3000")
    connectDB()
})