function task1() {
  task2();
}

function task2() {
  task3();
}

function task3() {
  console.log("HI");
}

task1();
