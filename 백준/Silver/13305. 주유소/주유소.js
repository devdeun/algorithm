const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const distance = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);

let totalPrice = BigInt(distance[0] * price[0]);
let minPrice = price[0];

for (let i = 1; i < distance.length; i++) {
  if (price[i] < minPrice) {
    minPrice = price[i];
  } 
  totalPrice += BigInt(minPrice * distance[i]);
}

console.log(String(totalPrice));