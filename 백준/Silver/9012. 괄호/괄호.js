const fs = require("fs")
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().split('\n')

for (let i = 0; i < n; i++) {
  const stack = []
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "(") {
      stack.push("(")
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop()
      } else {
        stack.push(")")
      }
    }
  }
  console.log(stack.length ? "NO": "YES")
}