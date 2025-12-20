const http = require("http")
const { methodNotAllowed, notFound } = require("./src/utils/responses");
const { sendFile } = require("./src/utils/sendFile");
const { registerHandler } = require("./src/controllers/registerHandler");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            switch (req.method) {
                case "GET":
                    sendFile(res, "./pages/index.html")
                    return;
                default:
                    methodNotAllowed(res);
                    return
            }
        case "/about":
            switch (req.method) {
                case "GET":
                    sendFile(res, "./pages/about.html")
                    return;
                default:
                    methodNotAllowed(res)
                    return;
            }
        case "/register":
            switch (req.method) {
                case "GET":
                    sendFile(res, './pages/register.html')
                    return;
                case "POST":
                    registerHandler(req, res)
                    return
                default:
                    methodNotAllowed(res)
                    return;
            }
        default:
            notFound(res)
            return;
    }
})

const PORT = 3001
server.listen(PORT)
console.log(`Listening server on port ${PORT}`)