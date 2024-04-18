const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [hour, minute] = input[0].split(" ").map((s) => +s);
const time = Number(input[1]);

minute += time;

if (minute >= 60) {
  hour += parseInt(minute / 60);
  minute %= 60;
}

if (hour >= 24) {
  hour %= 24;
}

console.log(`${hour} ${minute}`);
