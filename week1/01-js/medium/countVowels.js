/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str=str.toLowerCase()
    vowels=new Set(['a','e','i','o','u'])
    ans=0
    for (var i =0; i<str.length;i++){
      let char = str[i]
      if(vowels.has(char)){
        ans+=1
      }
    }
    return(ans)  

}



module.exports = countVowels;