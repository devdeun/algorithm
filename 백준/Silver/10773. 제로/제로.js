const fs = require("fs");
const [n, ...nums] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];
for (let i = 0; i < n; i++) {
  if (nums[i] === 0) {
    answer.pop();
  } else {
    answer.push(nums[i]);
  }
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
