const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let [a, b] = input;
a = a[2] + a[1] + a[0];
b = b[2] + b[1] + b[0];

console.log(Math.max(a, b));
