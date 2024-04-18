const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString());

let result = "";
for (let i = 1; i < 10; i++) {
  result += `${n} * ${i} = ${n * i}`;
  if (i !== 9) result += "\n";
}

console.log(result);