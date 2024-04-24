const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const price = Number(input[0]);
const totalPrice = input.slice(2).reduce((acc, cur) => {
  const [price, count] = cur.split(" ").map(Number);
  return acc + price * count;
}, 0);
console.log(price === totalPrice ? "Yes" : "No");
