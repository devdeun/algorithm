const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
for (let i = 0; i < +n; i++) {
  const [_, idx] = arr[line++].split(" ").map(Number);
  const docs = arr[line++].split(" ").map(Number);
  const mapped = docs.map((doc, i) => [i, doc]);

  let count = 0;
  while (mapped.length > 0) {
    const [currentIdx, num] = mapped[0];
    const largest = Math.max(...mapped.map((arr) => arr[1]));

    if (num < largest) {
      mapped.push(mapped.shift());
    } else {
      mapped.shift();
      count++;
      if (currentIdx === idx) {
        console.log(count);
        break;
      }
    }
  }
}