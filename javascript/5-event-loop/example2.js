const EventEmitter = require("events");

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on("dataReceived", (data) => {
  console.log("Data received:", data);
});

myEmitter.emit("dataReceived", {
  message: "Hello from event emitter!",
}); // Pass data with the event

myEmitter.emit("dataReceived", {
  message: "Another message!",
}); // Emit event again with different data
