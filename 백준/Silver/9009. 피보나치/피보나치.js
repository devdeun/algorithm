const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map(Number);
const max = Math.max(...arr);

const fibonacci = [];
fibonacci.push(0);
fibonacci.push(1);
while (fibonacci[fibonacci.length - 1] <= max) {
  fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
}

for (let i = 0; i < n; i++) {
  let n = arr[i];
  const result = [];
  let j = fibonacci.length - 1;
  while (0 < n) {
    if (fibonacci[j] <= n) {
      n -= fibonacci[j];
      result.push(fibonacci[j]);
    }
    j--;
  }
  
  console.log(result.reverse().join(" "));
}



