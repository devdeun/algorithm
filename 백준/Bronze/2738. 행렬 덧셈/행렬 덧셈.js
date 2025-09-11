const fs = require("fs");
const [str, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, _] = str.split(" ").map(Number);

for (let i = 0; i < n; i++) {
  const a = arr[i].split(" ").map(Number);
  const b = arr[i + n].split(" ").map(Number);
  console.log(a.map((n, i) => n + b[i]).join(" "));
}