function myFunction() {
  console.log("Starting a task...");
  // Simulate a long-running task (blocking)
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    // A big loop!
    sum += i;
  }
  console.log("Task finished!");
  return sum;
}

console.log("Before the function call");
let result = myFunction();
console.log("After the function call");
console.log("Result:", result);
