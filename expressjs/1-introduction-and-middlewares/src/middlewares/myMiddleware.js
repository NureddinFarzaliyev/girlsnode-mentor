const myMiddleware = (req, res, next) => {
    const now = new Date().toLocaleString()
    const method = req.method
    const url = req.url

    console.log(`Request received: ${method} ${url} ${now}`)
    next()
}

module.exports = { myMiddleware }