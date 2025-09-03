const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < Number(n); i++) {
  let totalScore = 0;
  let score = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "O") {
      totalScore += ++score;
    } else {
      score = 0;
    }
  }
  console.log(totalScore);
}
