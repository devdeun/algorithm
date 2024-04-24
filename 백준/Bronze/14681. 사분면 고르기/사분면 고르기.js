const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

const [a, b] = input.map(Number);

if (a > 0 && b > 0) {
  console.log(1);
} else if (a < 0 && b > 0) {
  console.log(2);
} else if (a < 0 && b < 0) {
  console.log(3);
} else {
  console.log(4);
}
