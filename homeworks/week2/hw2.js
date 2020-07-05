function capitalize(str) {
  if (str[0] >= 'A' && str[0] <= 'Z') {
    return str
  } else if (str[0] >= 'a' && str[0] <= 'z') {  // 把第一個小寫字母轉大寫
    let char = String.fromCharCode(str.charCodeAt(0) - ('a'.charCodeAt(0) - 'A'.charCodeAt(0)))
    str =  str.replace(str[0], char)
    return str
  } else {
    return str
  }
}

console.log(capitalize('Hello'));
console.log(capitalize('hello'));
console.log(capitalize(',hello'));
