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
  const n = Number(lines[0]);
  for (let i = 0; i < n; i += 1) {
    const p = lines[i + 1];
    isPrime(p);
  }
}

function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    console.log('Prime');
  } else {
    console.log('Composite');
  }
}
