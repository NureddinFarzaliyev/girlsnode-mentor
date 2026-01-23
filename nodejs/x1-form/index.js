const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("./pages/index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Internal server error");
      } else {
        res.end(data);
      }
    });
  } else if (req.method === "GET" && req.url === "/register") {
    fs.readFile("./pages/register.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Internal server error");
      } else {
        res.end(data);
      }
    });
  } else if (req.method === "POST" && req.url === "/register") {
    const buff = [];
    req.on("data", (chunk) => {
      buff.push(chunk);
    });
    req.on("end", () => {
      const data = Buffer.concat(buff).toString();
      console.log("Received registration data:", data);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Registration successful");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
