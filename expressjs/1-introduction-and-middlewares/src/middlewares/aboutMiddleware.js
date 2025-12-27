const aboutMiddleware = (req, res, next) => {
    console.log("Request to about")
    req.extraMessage = "this is about route"
    next()
}

module.exports = { aboutMiddleware }