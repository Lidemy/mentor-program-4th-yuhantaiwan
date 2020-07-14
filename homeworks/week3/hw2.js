/* eslint-disable no-use-before-define, no-shadow */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});

function solve(lines) {
  const temp = lines[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  isNarcissistic(n, m);
}

function isNarcissistic(n, m) {
  for (let i = n; i <= m; i += 1) {
    const digit = countDigit(i);
    let j = i;
    let result = 0;
    while (j > 0) {
      const number = j % 10;
      j = Math.floor(j / 10);
      result += (number ** digit);
    }
    if (result === i) {
      console.log(i);
    }
  }
}

function countDigit(n) {
  let i = n;
  let count = 0;
  while (i > 0) {
    i = Math.floor(i / 10);
    count += 1;
  }
  return count;
}
