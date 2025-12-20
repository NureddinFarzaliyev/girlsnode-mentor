const http = require("http");
const fs = require("fs");

function prepareHeaders(res, statusCode) {
  res.writeHead(statusCode, { "content-type": "text/html" });
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      prepareHeaders(res, 500);
      res.end("Internal server error");
    } else {
      prepareHeaders(res, 200);
      res.end(data);
    }
  });
}

function methodNotAllowed(res) {
  prepareHeaders(res, 405);
  res.end("Method not allowed\n");
}

function notFound(res) {
  prepareHeaders(res, 404);
  res.end("Route not found\n");
}

function internalServerError(res, err) {
  prepareHeaders(res, 500);
  res.end("Internal Server Error");
  console.error(err);
}

function registerHandler(req, res) {
  const buff = [];

  req.on("data", (chunk) => {
    buff.push(chunk);
  });

  req.on("end", () => {
    const data = Buffer.concat(buff).toString();
    const username = data.split("=")[1];

    const dbPath = "./db/db.txt";

    fs.readFile(dbPath, "utf8", (err, content) => {
      if (err && err.code !== "ENOENT") {
        internalServerError(res, err);
        return;
      }

      const exists = content && content.split("\n").includes(username);

      if (exists) {
        sendFile(res, "./pages/exists.html");
      } else {
        fs.mkdir("./db", { recursive: true }, (err) => {
          if (err) {
            internalServerError(res, err);
            return;
          }
          fs.appendFile(dbPath, username + "\n", (err) => {
            if (err) {
              internalServerError(res, err);
              return;
            }
            sendFile(res, "./pages/success.html");
          });
        });
      }
    });
  });
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      switch (req.method) {
        case "GET":
          sendFile(res, "./pages/index.html");
          break;
        default:
          methodNotAllowed(res);
          break;
      }
      break;
    case "/about":
      switch (req.method) {
        case "GET":
          sendFile(res, "./pages/about.html");
          break;
        default:
          methodNotAllowed(res);
          break;
      }
      break;
    case "/register":
      switch (req.method) {
        case "GET":
          sendFile(res, "./pages/register.html");
          break;
        case "POST":
          registerHandler(req, res);
          break;
        default:
          methodNotAllowed(res);
          break;
      }
      break;
    default:
      notFound(res);
      break;
  }
});

const PORT = 3000;
server.listen(PORT);
console.log(`Server is running at port ${PORT}`);
