const fs = require("fs");
const [_, str, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const operation = ["+", "-", "/", "*"];
const stack = [];
for (let i = 0; i < str.length; i++) {
  if (operation.includes(str[i])) {
    const b = stack.pop();
    const a = stack.pop();
    switch (str[i]) {
      case "+":
        stack.push(a + b);
        break;
      case "-":
        stack.push(a - b);
        break;
      case "*":
        stack.push(a * b);
        break;
      case "/":
        stack.push(a / b);
        break;
    }
  } else {
    const numIdx = str[i].charCodeAt(0) - "A".charCodeAt(0);
    stack.push(Number(arr[numIdx]));
  }
}

console.log(stack[0].toFixed(2));