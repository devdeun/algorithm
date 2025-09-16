const fs = require("fs");
const [h, w, n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(Math.ceil(h / (n + 1)) * Math.ceil(w / (m + 1)));