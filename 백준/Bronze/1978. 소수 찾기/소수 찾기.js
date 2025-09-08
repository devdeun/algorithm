const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[1].split(" ").map(Number).sort((a, b) => b - a);

const primes = getPrimes(arr[0]);

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (primes[arr[i]]) {
    count++;
  }
}

console.log(count);

function getPrimes(n) {
  const primes = Array(n + 1).fill(true);

  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = 2; j <= n; j++) {
        primes[i * j] = false;
      }
    }
  }

  return primes;
}