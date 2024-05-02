const fs = require("fs");
const group = fs.readFileSync("/dev/stdin").toString().trim().split("-");

let result = 0;
for (let i = 0; i < group.length; i++) {
  const arr = group[i].split("+").map(Number);
  const sum = arr.reduce((a, b) => a + b, 0);
  if (i === 0) result = sum;
  else result -= sum;
}

console.log(result);
