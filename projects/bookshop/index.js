const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { bookRouter } = require("./src/routers/book.router");
const { connectDB } = require("./src/db/mongo");
const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ status: "ok" });
});

app.use("/books", bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Listening app on port", PORT);
  connectDB();
});
