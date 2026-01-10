const express = require("express");
const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
  res.status(200).json({ status: "OK", message: "Service is healthy" });
});

module.exports = healthRouter;
