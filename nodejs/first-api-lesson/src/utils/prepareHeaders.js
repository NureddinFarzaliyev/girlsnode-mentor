function prepareHeaders(res, statusCode) {
    res.writeHead(statusCode, { "content-type": "text/html" })
}

module.exports = {
    prepareHeaders,
}