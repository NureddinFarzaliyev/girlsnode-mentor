const fs = require("fs");

console.log("Before reading file...");

fs.readFile("example.txt", "utf8", (err, data) => {
  // Listen for the 'file read' event (implicit)
  if (err) throw err;
  console.log(data); // When the file is read, print the content
});

console.log("After Reading file..."); // This will likely print *before* the file contents
