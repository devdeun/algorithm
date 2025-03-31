const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const [m, n] = input.split(" ").map(Number);

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = m; i <= n; i++) {
  if (isPrime(i)) console.log(i);
}