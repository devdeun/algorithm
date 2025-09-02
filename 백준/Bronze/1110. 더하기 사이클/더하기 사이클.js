const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [a, b] = input.padStart(2, "0").split("").map(Number);
let newInt;
let count = 0;

while (newInt !== Number(input)) {
  const sum = a + b;
  newInt = b * 10 + (sum % 10);
  a = parseInt(newInt / 10);
  b = newInt % 10;
  count++;
}

console.log(count);
