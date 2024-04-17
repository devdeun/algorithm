const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [a, b] = input;
a = Number(a);
b = Number(b);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);