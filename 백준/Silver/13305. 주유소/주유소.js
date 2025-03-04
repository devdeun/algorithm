const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const distance = input[1].split(" ").map(str => Number(str));
const price = input[2].split(" ").map(str => Number(str));

let totalPrice = distance[0] * price[0];
let minPrice = price[0]

for (let i = 1; i < distance.length; i++) {
  if (price[i] < minPrice) {
    minPrice = price[i];
  } 
  totalPrice += minPrice * distance[i];
}

console.log(totalPrice)