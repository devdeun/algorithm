const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [length, width, height] = input[0].split(" ").map(Number);
const n = Number(input[1]);

const cubes = Array(20).fill(0);
for (let i = 2; i < n + 2; i++) {
  const [size, count] = input[i].split(" ").map(Number);
  cubes[size] = count;
}

function getMaxFittingPower(x) {
  let i = 1;
  while (Math.pow(2, i) <= x) i++;
  return i - 1;
}

let maxCubePower = Math.min(19, getMaxFittingPower(length), getMaxFittingPower(width), getMaxFittingPower(height));
let totalCubeCount = 0;
let totalUsed = 0;

for (let i = maxCubePower; i >= 0; i--) {
  if (totalUsed === length * width * height) break;
  
  totalUsed *= 8;
  const current = Math.pow(2, i);
  let required = parseInt(length / current) * parseInt(width / current) * parseInt(height / current) - totalUsed;

  let usage = Math.min(required, cubes[i]);
  totalCubeCount += usage;
  totalUsed += usage;
}

console.log(totalUsed === length * width * height ? totalCubeCount : -1);