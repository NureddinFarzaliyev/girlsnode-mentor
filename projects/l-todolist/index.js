const dotenv = require('dotenv')
dotenv.config()

const express = require("express")
const connectDB = require('./src/db/mongodb')
const todoRouter = require('./src/routers/todoRouter')

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("OK")
})

app.use("/todos", todoRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`)
})
connectDB()