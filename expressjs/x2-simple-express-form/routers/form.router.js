const express = require("express")
const { getForm, getFormHi } = require("../controllers/form.controller")

const formRouter = express.Router()

formRouter.get("/", getForm)
formRouter.get("/hi", getFormHi)

module.exports = {
    formRouter
}