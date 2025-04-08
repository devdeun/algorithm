const fs = require("fs")
const str = fs.readFileSync("/dev/stdin").toString().trim()

const stack = []
let count = 0
for (let i = 0; i < str.length; i++) {
  if (str[i] === '(') {
    stack.push('(')
  } else {
    stack.pop()
    if (str[i - 1] === '(') {
      count += stack.length
    } else {
      count += 1
    }
  }
}

console.log(count)