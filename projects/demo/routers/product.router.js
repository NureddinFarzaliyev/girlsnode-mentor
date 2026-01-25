const express = require("express")
const { getProducts, deleteProduct } = require("../controllers/product.controller")
const productRouter = express.Router()

// GET /products
productRouter.get("/", getProducts)
// DELETE /products/1
productRouter.delete("/:id", deleteProduct)

module.exports = {
    productRouter
}