const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./src/db/mongo");

const todoRouter = require("./src/routers/todo.router");

const app = express();

app.use(express.json());

app.use("/todos", todoRouter);

const PORT = 3000;
connectDB();
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
