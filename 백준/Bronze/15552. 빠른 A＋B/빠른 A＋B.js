const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);

let result = "";
for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result += a + b;
  if (i !== n) result += "\n";
}

console.log(result);
