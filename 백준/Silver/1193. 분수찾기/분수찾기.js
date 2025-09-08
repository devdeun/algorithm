const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let x = 1;
let y = 1;
let direct = "up";
let count = 1;
while (count < n) {
  if (direct === "up") {
    if (x % 2 !== 0 && x === 1) {
      y++;
      direct = "down";
    } else {
      x--;
      y++;
    }
  } else if (direct === "down") {
    if (x % 2 === 0 && y === 1) {
      x++;
      direct = "up";
    } else {
      x++;
      y--;
    }
  }
  count++;
}

console.log(`${x}/${y}`);