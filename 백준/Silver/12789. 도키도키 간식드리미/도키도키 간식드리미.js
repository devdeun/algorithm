const fs = require("fs");
const [n, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = str.split(" ").map(Number);
const stack = [];
let current = 1;
for (let i = 0; i < +n; i++) {
  if (current === arr[i]) {
    current++;
  } else {
    stack.push(arr[i]);
  }

  while (stack[stack.length - 1] === current) {
    stack.pop();
    current++;
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");