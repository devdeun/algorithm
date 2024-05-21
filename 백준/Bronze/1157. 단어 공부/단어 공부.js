const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const obj = {};
for (let i = 0; i < input.length; i++) {
  const alphabet = input[i].toUpperCase();
  if (obj[alphabet] !== undefined) {
    obj[alphabet]++;
  } else {
    obj[alphabet] = 1;
  }
}

let max = 0;
for (const alphabet in obj) {
  max = Math.max(max, obj[alphabet]);
}

let frequentAlphabet;
for (const alphabet in obj) {
  const current = obj[alphabet];
  if (current === max) {
    if (frequentAlphabet && frequentAlphabet !== current) {
      frequentAlphabet = "?";
      break;
    }
    frequentAlphabet = alphabet;
  }
}

console.log(frequentAlphabet);