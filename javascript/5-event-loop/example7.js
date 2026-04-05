function task1() {
  console.log("Hi from task 1");
  task2();
}

function task2() {
  console.log("Hi from task 2");
  setTimeout(() => {
    console.log("Hi from task 2 after 3 sec");
  }, 0);
  task3();
}

function task3() {
  console.log("Hi from task 3");
}

task1();
