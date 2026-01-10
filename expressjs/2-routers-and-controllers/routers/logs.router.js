const express = require("express");
const { getAllLogs } = require("../controllers/logs.controller");
const logsRouter = express.Router();

logsRouter.get("/", getAllLogs);

module.exports = logsRouter;
