const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let [hour, minute] = input;
hour = +hour;
minute = +minute;

if (minute < 45) {
  hour -= 1;
  minute += 60;
}

console.log(hour < 0 ? 23 : hour, minute - 45);