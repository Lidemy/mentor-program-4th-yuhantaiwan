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
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

function isNarcissistic(n) {
  const digit = countDigit(n);
  let j = n;
  let result = 0;
  while (j > 0) {
    const number = j % 10;
    j = Math.floor(j / 10);
    result += (number ** digit);
  }
  return result === n;
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
