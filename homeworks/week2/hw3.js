function reverse(str) {
  let reverseStr = '';
  for(let i=str.length-1; i>=0; i--) {
    reverseStr = reverseStr + str[i];
  }
  console.log(reverseStr);
}

reverse('hello');
reverse('1abc2');
reverse('1,2,3,2,1');
