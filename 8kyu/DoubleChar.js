/**
 * Day 3/365.
 * https://www.codewars.com/kata/56b1f01c247c01db92000076
 * @returns a string in which each character (case-sensitive) is repeated once.
 */

// function doubleChar(str) {
//   // Your code here
//   let resultsDoubleChar = ''

//   for (let i = 0; i < str.length; i++) {
//     resultsDoubleChar += str.at(i) + str.at(i)
//   }

//   return resultsDoubleChar
// }

// console.log(doubleChar('mizz'))

function doubleChar(str) {
  // Your code here
  return str
    .split('')
    .map((c) => c + c)
    .join('')
}

console.log(doubleChar('mizz'))
