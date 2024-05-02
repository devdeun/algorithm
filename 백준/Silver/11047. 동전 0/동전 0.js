const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [length, totalPrice] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let count = 0;
for (let i = length - 1; i >= 0; i--) {
  count += Math.floor(totalPrice / coins[i]);
  totalPrice %= coins[i];
  if (totalPrice === 0) break;
}

console.log(count);
