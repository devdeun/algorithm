const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const long = "long ";
console.log(long.repeat(+input / 4) + "int");
