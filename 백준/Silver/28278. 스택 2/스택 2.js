const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
const output = [];

for (let i = 0; i < +n; i++) {
  const [cmd, x] = arr[i].split(" ").map(Number);

  switch (cmd) {
    case 1:
      stack.push(x);
      break;
    case 2:
      output.push(stack.pop() ?? -1);
      break;
    case 3:
      output.push(stack.length);
      break;
    case 4:
      output.push(stack.length ? 0 : 1);
      break;
    case 5:
      output.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(output.join("\n"));