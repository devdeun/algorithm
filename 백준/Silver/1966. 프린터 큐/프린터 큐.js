const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
for (let i = 0; i < +n; i++) {
  const [_, idx] = arr[line++].split(" ").map(Number);
  const docs = arr[line++].split(" ").map(Number);
  const queue = docs.map((doc, i) => [i, doc]);
  const priorities = [...docs].sort((a, b) => b - a);

  let pIndex = 0;
  let count = 0;
  while (queue.length > 0) {
    const [currentIdx, currentPriority] = queue.shift();

    if (currentPriority === priorities[pIndex]) {
      count++;
      pIndex++;
      if (currentIdx === idx) {
        console.log(count);
        break;
      }
    } else {
      queue.push([currentIdx, currentPriority]);
    }
  }
}