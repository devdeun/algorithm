const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;
for (let i = 0; i < +n; i++) {
  const str = arr[i];
  const stack = [];
  for (let j = 0; j < str.length; j++) {
    if (stack.length > 0 && stack[stack.length - 1] === str[j]) {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }
  count += stack.length ? 0 : 1;
}

console.log(count);