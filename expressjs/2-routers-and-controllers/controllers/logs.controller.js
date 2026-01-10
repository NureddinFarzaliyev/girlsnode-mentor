const fs = require("fs");
const path = require("path");

const getAllLogs = (req, res) => {
  const filePath = path.join(__dirname, "./../logs/app.log");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read logs." });
    }
    const logs = data.split("\n").filter((line) => line.trim() !== "");
    res.status(200).json({ logs });
  });
};

module.exports = {
  getAllLogs,
};
