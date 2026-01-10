// Imports
const express = require("express");

// Importing Routers
const tasksRouter = require("./routers/tasks.router");
const healthRouter = require("./routers/health.router");
const logsRouter = require("./routers/logs.router");

// Middlewares
const logger = require("./middlewares/logger.middleware");

// App
const app = express();
const port = 3001;

// Middlewares
app.use(express.json());
app.use(logger);

// Sample route
app.use("/health", healthRouter);
app.use("/tasks", tasksRouter);
app.use("/logs", logsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
