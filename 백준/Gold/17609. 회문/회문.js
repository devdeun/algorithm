
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, ...arr] = input;

const isPalindrome = (str) => str === str.split("").reverse().join("");

for (let i = 0; i < Number(n); i++) {
  const word = arr[i];
  if (isPalindrome(word)) {
    console.log(0);
    continue;
  }

  let isSimilar = false;
  let n = word.length;
  for (let j = 0; j < parseInt(n / 2); j++) {
    if (word[j] !== word[n - j - 1]) {
      if (isPalindrome(word.slice(0, j) + word.slice(j + 1, n))) isSimilar = true;
      if (isPalindrome(word.slice(0, n - j - 1) + word.slice(n - j, n))) isSimilar = true;
      break;
    }
  }

  if (isSimilar) {
    console.log(1);
  } else {
    console.log(2);
  }
}