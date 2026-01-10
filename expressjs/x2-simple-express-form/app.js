const express = require("express"); 
const { formRouter } = require("./routers/form.router");
const app = express();

app.use("/form", formRouter)

const port = 3001;
app.listen(port, () => {
    console.log("Listening successfully", port)
})