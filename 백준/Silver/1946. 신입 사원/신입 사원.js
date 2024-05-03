const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testLength = Number(input[0]);
let testCase = 1;
for (let t = 0; t < testLength; t++) {
  const scores = [];
  const n = Number(input[testCase]);
  for (let i = testCase + 1; i <= testCase + n; i++) {
    const score = input[i].split(" ").map(Number);
    scores.push(score);
  }
  scores.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (const [a, b] of scores) {
    if (b < min) {
      min = b;
      count++;
    }
  }
  console.log(count);
  testCase += n + 1;
}
