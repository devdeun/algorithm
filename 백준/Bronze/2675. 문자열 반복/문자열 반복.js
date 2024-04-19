const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let result = "";
  const [n, str] = input[i].split(" ");
  if (!str) continue;
  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(n);
  }
  console.log(result);
}
