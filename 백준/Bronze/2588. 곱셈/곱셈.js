const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input;
const [x3, x2, x1] = b;

console.log(Number(a) * Number(x1));
console.log(Number(a) * Number(x2));
console.log(Number(a) * Number(x3));
console.log(Number(a) * Number(b));