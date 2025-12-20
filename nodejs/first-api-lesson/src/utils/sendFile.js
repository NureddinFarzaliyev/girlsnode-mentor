const { prepareHeaders } = require("./prepareHeaders");
const { internalServerError } = require("./responses");
const fs = require("fs")

function sendFile(res, url) {
    fs.readFile(url, (err, data) => {
        if (err) {
            internalServerError(res, err);
            return
        } else {
            prepareHeaders(res, 200)
            res.end(data)
            return
        }
    })
}

module.exports = {
    sendFile
}