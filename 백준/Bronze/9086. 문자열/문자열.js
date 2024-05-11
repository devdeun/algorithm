const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
for (let i = 1; i <= n; i++) {
  const string = input[i];
  console.log(string[0] + string[string.length - 1]);
}
