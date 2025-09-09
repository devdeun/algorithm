const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let isTag = false;
let word = [];
let result = "";

for (let i = 0; i < input.length; i++) {
  const w = input[i];
  if (w === "<") {
    result += word.reverse().join("");
    word = [];
    word.push(w);
    isTag = true;
  } else if (w === ">") {
    word.push(w);
    result += word.join("");
    word = [];
    isTag = false;
  } else if (w === " " && !isTag) {
    result += word.reverse().join("") + w;
    word = [];
  } else {
    word.push(w);
  }
}

result += word.reverse().join("");
console.log(result);