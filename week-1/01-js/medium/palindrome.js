/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(char) {
  const alphabetRegex = /^[a-zA-Z]$/;
  return alphabetRegex.test(char);
}

function isPalindrome(str) {
  let i =0;
  let j=str.length-1;
  str=str.toLowerCase();
  while(j>i){
    while(i<str.length && isAlphabet(str[i])!=true) i=i+1;
    while(j>=0 && isAlphabet(str[j])!=true) j=j-1;
    if(j<=i) break
    if(str[i]!=str[j]) {
      return(false);
    }
    i=i+1;
    j=j-1;
  }
  return true;
}


module.exports = isPalindrome;
