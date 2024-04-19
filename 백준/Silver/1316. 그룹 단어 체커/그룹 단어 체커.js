const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let count = 0;
for (let i = 1; i <= n; i++) {
  const word = input[i];
  const arr = [];
  let current;
  for (let j = 0; j < word.length; j++) {
    if (current && current !== word[j]) {
      arr.push(current);
      current = word[j];
    } else {
      current = word[j];
    }
    if (arr.includes(current)) {
      current = null;
      break;
    }
  }
  if (current) count++;
}
console.log(count);