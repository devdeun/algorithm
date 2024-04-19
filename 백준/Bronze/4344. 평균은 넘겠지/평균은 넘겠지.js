const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(" ");
  const n = +arr.shift();
  const average = arr.reduce((a, b) => +a + +b, 0) / n;
  const count = arr.filter((num) => num > average).length;
  const percent = (count / n) * 100;
  console.log(percent.toFixed(3) + "%");
}
