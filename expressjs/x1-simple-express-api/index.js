const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fs.readFile("./pages/home.html", (err, data) => {
    if (err) {
      res.writeHead(200, { "content-type": "text/html" });
      res.end("Internal server error");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

app.get("/register", (req, res) => {
  fs.readFile("./pages/register.html", (err, data) => {
    if (err) {
      res.writeHead(200, { "content-type": "text/html" });
      res.end("Internal server error");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

app.post("/register", (req, res) => {
  const buff = [];

  req.on("data", (chunk) => {
    buff.push(chunk);
  });

  req.on("end", () => {
    const data = Buffer.concat(buff).toString();
    console.log(data);
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Registration successful with user data: " + data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
