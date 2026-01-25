const express = require('express')
const { productRouter } = require('./routers/product.router')
const app = express()

app.use("/products", productRouter) // GET /products // DELETE /products/1

app.listen(3000,() => {
    console.log("Listening app on 3000")
})