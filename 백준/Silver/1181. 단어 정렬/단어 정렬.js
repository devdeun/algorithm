const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const data = new Set(input.slice(1));

const arr = new Array(...data).sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});
console.log(arr.join("\n"));
