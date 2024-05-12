const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let time = input.length;
for (let i = 0; i < input.length; i++) {
  const s = input[i];
  if (["A", "B", "C"].includes(s)) time += 2;
  else if (["D", "E", "F"].includes(s)) time += 3;
  else if (["G", "H", "I"].includes(s)) time += 4;
  else if (["J", "K", "L"].includes(s)) time += 5;
  else if (["M", "N", "O"].includes(s)) time += 6;
  else if (["P", "Q", "R", "S"].includes(s)) time += 7;
  else if (["T", "U", "V"].includes(s)) time += 8;
  else if (["W", "X", "Y", "Z"].includes(s)) time += 9;
}

console.log(time);
