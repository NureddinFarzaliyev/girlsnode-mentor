const express = require("express");

const { healthRouter } = require("./routers/health.router");

const app = express()
const PORT = 3000;

app.use(express.json())

app.use("/health", healthRouter)

app.listen(PORT, () => {
    console.log(`Listening app on ${PORT}`)
})