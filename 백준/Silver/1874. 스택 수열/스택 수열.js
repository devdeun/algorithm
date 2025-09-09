const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
let idx = 0;
const answer = [];
for (let num = 1; num <= +n; num++) {
  stack.push(num);
  answer.push("+");

  while (stack[stack.length - 1] === Number(arr[idx])) {
    stack.pop();
    idx++;
    answer.push("-");
  }
}

console.log(stack.length ? "NO" : answer.join("\n"));