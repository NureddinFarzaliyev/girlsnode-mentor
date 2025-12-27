const express = require("express");
const { myMiddleware } = require("./src/middlewares/myMiddleware");
const { aboutMiddleware } = require("./src/middlewares/aboutMiddleware");
const { aboutController } = require("./src/controllers/aboutController");
const { helloController } = require("./src/controllers/helloController");

const app = express();

app.use(myMiddleware)

app.use("/about", aboutMiddleware, aboutController)
app.use("/", helloController)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Listening app on port ${PORT}`)
})