const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [a, b] = input;
console.log(Number(a) * Number(b));