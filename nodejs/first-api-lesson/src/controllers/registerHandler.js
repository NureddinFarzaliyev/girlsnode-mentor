const fs = require("fs")
const { internalServerError } = require("../utils/responses")
const { sendFile } = require("../utils/sendFile")

function registerHandler(req, res) {
    const buffer = []

    req.on("data", (chunk) => {
        buffer.push(chunk)
    })

    req.on("end", () => {
        const data = Buffer.concat(buffer).toString()
        const username = data.split("=")[1]

        fs.readFile("./db/db.txt", "utf8", (err, content) => {
            if (err && err.code !== "ENOENT") {
                internalServerError(res, err);
                return
            }

            const exists = content && content.split("\n").includes(username)

            if (exists) {
                sendFile(res, './pages/exists.html')
                return;
            } else {
                fs.mkdir("./db", { recursive: true }, (err) => {
                    if (err) {
                        internalServerError(res, err)
                        return;
                    }

                    fs.appendFile("./db/db.txt", username + "\n", (err) => {
                        if (err) {
                            internalServerError(res, err)
                            return;
                        }
                        sendFile(res, './pages/success.html')
                    })
                })
            }
        })
    })
}

module.exports = {
    registerHandler
}