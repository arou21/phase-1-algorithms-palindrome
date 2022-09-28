function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('')
  return reverseWord === word 
}

/* 
  Add your pseudocode here
  reverse word = word.reverse
  if word = reverseword
  then true
*/

/*
  Add written explanation of your solution here
  isPalimndrom is a function that takes one parmitor that is a string. 
  when a word comes in we reverse the word by calling the split function, 
  which converts the string into an array, so that we could reverse the array 
  using the reverse method. Once the string is reversed, then we convert the 
  array into a string, and then we check that the word is the same.   
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log('')
  console.log('Expecting: true')
  console.log('=>', isPalindrome('dad'))
}

module.exports = isPalindrome;
