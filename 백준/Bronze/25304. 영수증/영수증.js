const fs = require("fs");
const [price, n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let totalPrice = 0;
for (let i = 0; i < Number(n); i++) {
  const [currentPrice, count] = arr[i].split(" ").map(Number);
  totalPrice += currentPrice * count;
}

console.log(Number(price) === totalPrice ? "Yes" : "No");
