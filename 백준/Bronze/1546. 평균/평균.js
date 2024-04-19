const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];
const score = input[1].split(" ").map(Number);
const maxScore = Math.max(...score);
const updatedScoreSum = score
  .map((num) => (num / maxScore) * 100)
  .reduce((a, b) => a + b, 0);

console.log(updatedScoreSum / n);
