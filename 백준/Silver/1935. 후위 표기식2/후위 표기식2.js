const fs = require("fs");
const [n, str, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const alp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const map = new Map();

for (let i = 0; i < +n; i++) {
  map.set(alp[i], Number(arr[i]));
}

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
    stack.push(map.get(str[i]));
  }
}

console.log(stack[0].toFixed(2));