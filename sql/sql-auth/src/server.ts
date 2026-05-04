import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db";
import { setupRelations } from "./models/setupRelations";
import { authRouter } from "./routers/auth";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello, World!");
});

app.use("/auth", authRouter);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    setupRelations();
    console.log("Relations have been set up successfully.");
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();
