const express = require("express")
const { getAllCategories, getSingleCategory } = require("../controllers/categoriesController")

const categoriesRouter = express.Router()

// categories

categoriesRouter.get("/", getAllCategories) // /categories/
categoriesRouter.patch("/:cat", getSingleCategory) // /categories/asdasd

module.exports = {
    categoriesRouter
}