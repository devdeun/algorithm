const fs = require("fs");
const year = +fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const isLeapYear = (year % 4 === 0 && year % 100) || year % 400 === 0;

console.log(isLeapYear ? 1 : 0);
