const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { connectDB } = require("./src/db/mongo");
const { tagRouter } = require("./src/routers/tag.router");
const { productRouter } = require("./src/routers/product.router");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("OK");
});

app.use("/tags", tagRouter);
app.use("/products", productRouter);

connectDB();
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
