const fs = require("fs");
const [_, s] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = s.split(" ").map(Number);
const set = new Set(arr);
const sorted = [...set].sort((a, b) => a - b);

const map = new Map();
sorted.forEach((n, i) => map.set(n, i));
console.log(arr.map((n) => map.get(n)).join(" "));