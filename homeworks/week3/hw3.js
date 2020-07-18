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
  for (let i = 0; i < n; i++) {
    const p = lines[i + 1];
    console.log(isPrime(p) ? 'Prime' : 'Composite');
  }
}

function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 2;
}
