const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let [from, to] = input.split(" ").map(Number);
let count = 1;

while (from < to) {
  if (to % 2 === 0) {
    to = parseInt(to / 2);
  } else if (to % 10 === 1) {
    to = parseInt(to / 10);
  } else {
    break;
  }
  count++;
}

console.log(from === to ? count : -1);
