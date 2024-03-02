/**
 * Day 7/365.
 * https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
 * Complete the function that accepts a string parameter, and reverses each word in the string.
 * All spaces in the string should be retained.
 * @returns new string when a word is already reversed
 */

// function reverseWords(str) {
  // Go for it
  // split words into seperate arrays
//   const split = str.split(' ')

//   let newStr = ''

//   for (let i = 0; i < split.length; i++) {
//     for (let j = split[i].length - 1; j >= 0; j--) {
//       newStr += split[i].charAt(j)
//     }
//     newStr += ' '
//   }

//   const reversedWords = newStr.trimEnd()
  
//   return reversedWords
// }

function reverseWords(str) {
  // Go for it
  // split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords('apple banana'))
console.log(reverseWords('a b c d'))
console.log(reverseWords('double  spaced  words'))