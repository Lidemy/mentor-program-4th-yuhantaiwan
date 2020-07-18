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
  const str = lines[0];
  reverseStr(str);
}

function reverseStr(str) {
  let newStr = '';
  for (let i = str.length; i >= 1; i--) {
    newStr += str[i - 1];
  }
  if (newStr === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}
