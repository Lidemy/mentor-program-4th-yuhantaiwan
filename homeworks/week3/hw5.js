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
  for (let i = 1; i <= n; i++) {
    const temp = lines[i].split(' ');
    const a = temp[0];
    const b = temp[1];
    const k = temp[2];
    console.log(compareStr(a, b, k));
  }
}

function compareStr(a, b, k) {
  if (a.length > b.length) {
    return k === '1' ? 'A' : 'B';
  }
  if (a.length < b.length) {
    return k === '1' ? 'B' : 'A';
  }
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (Number(a[i]) > Number(b[i])) {
        return k === '1' ? 'A' : 'B';
      }
      if (Number(a[i]) < Number(b[i])) {
        return k === '1' ? 'B' : 'A';
      }
    }
    return 'DRAW';
  }
  return undefined;
}
