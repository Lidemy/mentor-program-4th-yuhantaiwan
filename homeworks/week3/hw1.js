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
  const n = lines[0];
  printStars(n);
}

function printStars(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    star += '*';
    console.log(star);
  }
}
