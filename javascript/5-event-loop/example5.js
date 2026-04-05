function myFunction() {
  console.log("Starting a task...");
  // Simulate a long-running task (non-blocking) - using setTimeout
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      // A big loop!
      sum += i;
    }
    console.log("Task finished!");
    console.log("Result:", sum);
  }, 0); // The 0 delay makes it asynchronous
}

console.log("Before the function call");
myFunction(); // The program doesn't wait here
console.log("After the function call");
