const { prepareHeaders } = require("./prepareHeaders")

function methodNotAllowed(res) {
    prepareHeaders(res, 405)
    res.write("Method not allowed")
    res.end()
}

function notFound(res) {
    prepareHeaders(res, 404)
    res.write("Route not found")
    res.end()
}

function internalServerError(res, err) {
    prepareHeaders(res, 500)
    res.write("Internal server error")
    console.error(err)
    res.end()
}

module.exports = {
    methodNotAllowed,
    notFound, 
    internalServerError
}