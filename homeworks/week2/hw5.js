function join(arr, concatStr) {
  let str = '';
  for(let i=0; i<arr.length; i++) {
    str = str + arr[i].toString() + concatStr;
  }
  str = str.slice(0,-1);
  return str
}

function repeat(str, times) {
  let reStr = '';
  for(let i=1; i<=times; i++) {
    reStr = reStr + str;
  }
  return reStr
}

console.log(join(['a'], '!'));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ','));

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));