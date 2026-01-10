const fs = require("fs");

const logger = (req, res, next) => {
  const date = new Date().toLocaleString();
  const log = `[http] [${date}] | ${req.method} ${req.url}`;

  const logDir = "./logs";
  const logFile = logDir + "/app.log";

  fs.mkdir(logDir, { recursive: true }, (err) => {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
      console.error(`[error] Error when creating directory: ${logDir}`);
      return;
    }

    fs.appendFile(logFile, log + "\n", (err) => {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
        console.error(`[error] Error when creating file: ${logFile}`);
        return;
      }
    });

    console.log(log);
    next();
  });
};

module.exports = logger;
