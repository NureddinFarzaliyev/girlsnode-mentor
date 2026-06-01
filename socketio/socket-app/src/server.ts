import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);
  io.emit("msg", `New user connected: ${socket.id}`);

  socket.on("msg", (msg) => {
    const timestamp = new Date().toISOString().replace("T", " ").split(".")[0];
    const userId = socket.id;
    const message = `[${timestamp}] [${userId}]: ${msg}`;
    io.emit("msg", message);
    console.log("Message received: " + msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//     setupRelations();
//     console.log("Relations have been set up successfully.");
//     await sequelize.sync({ alter: true });
//     console.log("All models were synchronized successfully.");
//
//     const PORT = process.env.PORT || 3000;
//     server.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// start();
